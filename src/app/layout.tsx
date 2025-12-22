import type { Metadata } from 'next';
import './globals.css';
import { Inter as FontSans, Geist_Mono as FontMono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const fontSans = FontSans({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const fontMono = FontMono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Next.js + Better Auth + Prisma Template',
  description:
    'A starter template for Next.js projects using Better Auth and Prisma.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
