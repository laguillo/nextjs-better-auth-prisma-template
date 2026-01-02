import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Evitar cacheo estático del healthcheck
export const dynamic = 'force-dynamic';

interface PrismaError extends Error {
  code?: string;
  clientVersion?: string;
}

async function checkDatabaseWithRetry(maxRetries = 5, retryDelay = 2000) {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Timeout interno por intento para no bloquear indefinidamente
      await Promise.race([
        prisma.$queryRaw`SELECT 1`,
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Database query timeout')), 5000)
        )
      ]);
      return { success: true, attempt };
    } catch (error) {
      lastError = error;
      const prismaError = error as PrismaError;

      console.warn(
        `Healthcheck attempt ${attempt}/${maxRetries} failed:`,
        prismaError.message
      );

      // Códigos de error comunes durante el inicio o problemas de conexión
      // P2010: Raw query failed. Code: `57P03`. Message: `the database system is starting up`
      // ETIMEDOUT: Connection timed out
      // P1001: Can't reach database server
      const isRetryable =
        prismaError.code === 'P2010' ||
        prismaError.code === 'ETIMEDOUT' ||
        prismaError.code === 'P1001' ||
        prismaError.message?.includes('starting up') ||
        prismaError.message?.includes('timeout');

      if (isRetryable && attempt < maxRetries) {
        // Esperar antes del siguiente intento
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        continue;
      }

      // Si no es reintentable o se acabaron los intentos, lanzar el error
      throw error;
    }
  }
  throw lastError;
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
        attempts: attempt,
        env: process.env.NODE_ENV
      },
      { status: 200 }
    );
  } catch (error) {
    const responseTime = Date.now() - startTime;
    const prismaError = error as PrismaError;

    console.error('Health check critical failure:', prismaError);

    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        database: 'disconnected',
        responseTime: `${responseTime}ms`,
        error: prismaError.message || 'Unknown error',
        code: prismaError.code
      },
      { status: 503 }
    );
  }
}
