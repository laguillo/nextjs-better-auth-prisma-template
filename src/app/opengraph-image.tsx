import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/constants';

export const alt = `${SITE_NAME} — Deploy to Railway in one click`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0a0a0a',
          color: '#fafafa'
        }}
      >
        <div style={{ fontSize: 28, color: '#a1a1aa', display: 'flex' }}>
          Open source · MIT
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 24,
            display: 'flex'
          }}
        >
          Ship your Next.js SaaS in minutes, not weeks.
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#a1a1aa',
            marginTop: 32,
            display: 'flex'
          }}
        >
          Better Auth · Prisma · PostgreSQL · shadcn/ui · Admin panel
        </div>
        <div
          style={{
            marginTop: 56,
            display: 'flex',
            alignItems: 'center',
            fontSize: 30,
            fontWeight: 600
          }}
        >
          <div
            style={{
              background: '#fafafa',
              color: '#0a0a0a',
              padding: '14px 28px',
              borderRadius: 12,
              display: 'flex'
            }}
          >
            Deploy on Railway →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
