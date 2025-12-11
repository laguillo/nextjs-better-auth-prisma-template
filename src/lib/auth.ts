import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { admin } from 'better-auth/plugins';
import { nextCookies } from 'better-auth/next-js';
import { Resend } from 'resend';
import ForgotPasswordEmail from '@/components/emails/reset-password';
import VerifyEmail from '@/components/emails/verify-email';
import prisma from '@/lib/prisma';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: user.email,
        subject: 'Reset your password',
        react: ForgotPasswordEmail({
          username: user.name,
          resetUrl: url,
          userEmail: user.email
        })
      });
    },
    requireEmailVerification: true
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
        to: user.email,
        subject: 'Verify your email',
        react: VerifyEmail({ username: user.name, verifyUrl: url })
      });
    },
    sendOnSignUp: true
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql'
  }),
  plugins: [admin(), nextCookies()]
});
