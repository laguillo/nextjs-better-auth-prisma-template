import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const startTime = Date.now();

  try {
    // Verificar conexión a la base de datos con timeout
    await Promise.race([
      prisma.$queryRaw`SELECT 1`,
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Database timeout')), 5000)
      )
    ]);

    const responseTime = Date.now() - startTime;

    return NextResponse.json(
      {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected',
        responseTime: `${responseTime}ms`
      },
      { status: 200 }
    );
  } catch (error) {
    const responseTime = Date.now() - startTime;
    console.error('Health check failed:', error);

    // Si es un error de timeout o conexión, retornar 200 en desarrollo
    // pero 503 en producción para que Railway sepa que hay un problema
    const isProduction = process.env.NODE_ENV === 'production';
    const statusCode = isProduction ? 503 : 200;

    return NextResponse.json(
      {
        status: isProduction ? 'unhealthy' : 'degraded',
        timestamp: new Date().toISOString(),
        database: 'disconnected',
        responseTime: `${responseTime}ms`,
        error: error instanceof Error ? error.message : 'Unknown error',
        env: process.env.NODE_ENV
      },
      { status: statusCode }
    );
  }
}
