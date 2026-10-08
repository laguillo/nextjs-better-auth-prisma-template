import type { Metadata } from 'next';
import './globals.css';
import { fontSans, fontMono } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Inter } from 'next/font/google';
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Better Auth, Prisma & shadcn/ui`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    'Open-source Next.js SaaS starter with Better Auth, Prisma, PostgreSQL, shadcn/ui, admin panel and transactional emails. Deploy to Railway in one click.',
  keywords: [
    'Next.js template',
    'Next.js SaaS starter',
    'Better Auth',
    'Prisma',
    'shadcn/ui',
    'Railway template',
    'Next.js boilerplate'
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Ship your SaaS in minutes`,
    description: SITE_TAGLINE
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Ship your SaaS in minutes`,
    description: SITE_TAGLINE
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
