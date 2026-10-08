export const SITE_NAME = 'Next.js SaaS Starter';
export const SITE_TAGLINE =
  'Next.js + Better Auth + Prisma + shadcn/ui. Deploy to Railway in one click.';
// Resolved at build time. Falls back to Railway's public domain so a fresh
// deploy gets correct OG/sitemap/robots URLs without extra configuration.
export const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ??
  process.env.BETTER_AUTH_URL ??
  (process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : 'http://localhost:3000');

export const GITHUB_URL =
  'https://github.com/laguillo/nextjs-better-auth-prisma-template';

const RAILWAY_DEPLOY_BASE =
  'https://railway.com/deploy/nextjs-better-auth-prisma-template';

/**
 * Railway deploy link. `placement` is sent as `utm_content` so Railway's
 * referral stats show which CTA on the page converts best.
 */
export function railwayDeployUrl(placement: string) {
  const params = new URLSearchParams({
    referralCode: 'HKQvZr',
    utm_medium: 'integration',
    utm_source: 'template',
    utm_campaign: 'generic',
    utm_content: placement
  });
  return `${RAILWAY_DEPLOY_BASE}?${params.toString()}`;
}
