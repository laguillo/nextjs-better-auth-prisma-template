import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

async function checkDatabaseWithRetry(maxRetries = 3, retryDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await Promise.race([
        prisma.$queryRaw`SELECT 1`,
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Database timeout')), 10000)
        )
      ]);
      return { success: true, attempt };
    } catch (error: unknown) {
      // Si es un error de "database is starting up", reintentamos
      if (
        error.code === 'P2010' ||
        error.code === 'ETIMEDOUT' ||
        error.message?.includes('starting up')
      ) {
        if (attempt < maxRetries) {
          console.log(
            `Database starting up, retry ${attempt}/${maxRetries}...`
          );
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
          continue;
        }
      }
      throw error;
    }
  }
  throw new Error('Max retries reached');
}

export async function GET() {
  const startTime = Date.now();

  try {
    const { attempt } = await checkDatabaseWithRetry();
    const responseTime = Date.now() - startTime;

    return NextResponse.json(
      {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
        responseTime: `${responseTime}ms`,
        attempts: attempt
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const responseTime = Date.now() - startTime;
    console.error('Health check failed:', error);

    // Determinar el tipo de error
    const isStartingUp =
      error.code === 'P2010' || error.message?.includes('starting up');

    // const isTimeout =
    //   error.code === 'ETIMEDOUT' || error.message?.includes('timeout');

    // En producción, si la DB está iniciándose, retornar 503
    // En desarrollo, ser más permisivo
    const isProduction = process.env.NODE_ENV === 'production';

    // Si la base de datos está iniciándose, considerarlo temporalmente no saludable
    let statusCode = 503;
    let status = 'unhealthy';

    if (!isProduction) {
      // En desarrollo, ser más tolerante
      statusCode = 200;
      status = 'degraded';
    }

    return NextResponse.json(
      {
        status,
        timestamp: new Date().toISOString(),
        database: isStartingUp ? 'starting' : 'disconnected',
        responseTime: `${responseTime}ms`,
        error: error.message || 'Unknown error',
        errorCode: error.code,
        env: process.env.NODE_ENV
      },
      { status: statusCode }
    );
  }
}
