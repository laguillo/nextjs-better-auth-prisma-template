import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from 'react-email';

type ForgotPasswordEmailProps = {
  username: string;
  resetUrl: string;
  userEmail: string;
};

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  const { username, resetUrl, userEmail } = props;

  return (
    <Html dir='ltr' lang='en'>
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required</Preview>
        <Body className='bg-gray-100 py-10 font-sans'>
          <Container className='mx-auto max-w-150 rounded-xl bg-white p-8'>
            {/* Header */}
            <Section className='mb-8 text-center'>
              <Heading className='m-0 mb-2 text-[28px] font-bold text-gray-900'>
                Reset Your Password
              </Heading>
              <Text className='m-0 text-[16px] text-gray-600'>
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className='mb-8'>
              <Text className='mt-0 mb-2 text-[16px] leading-6 text-gray-700'>
                Hello {username},
              </Text>
              <Text className='mt-0 mb-2 text-[16px] leading-6 text-gray-700'>
                We received a password reset request for your account associated
                with <strong>{userEmail}</strong>.
              </Text>
              <Text className='mt-0 mb-6 text-[16px] leading-6 text-gray-700'>
                Click the button below to create a new password. This link will
                expire in 24 hours for security reasons.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className='mb-8 text-center'>
              <Button
                className='box-border inline-block rounded-xl bg-blue-600 px-8 py-3.5 text-[16px] font-semibold text-white no-underline'
                href={resetUrl}
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className='mb-8'>
              <Text className='m-0 mb-2 text-[14px] leading-5 text-gray-600'>
                If the button doesn&apos;t work, copy and paste this link into
                your browser:
              </Text>
              <Link
                className='text-[14px] break-all text-blue-600 underline'
                href={resetUrl}
              >
                {resetUrl}
              </Link>
            </Section>

            {/* Security Notice */}
            <Section className='mb-8 rounded-xl border border-yellow-200 bg-yellow-50 p-5'>
              <Text className='m-0 mb-2 text-[14px] leading-5 font-semibold text-yellow-900'>
                ⚠️ Security Notice:
              </Text>
              <Text className='m-0 mb-1 text-[14px] leading-5 text-gray-700'>
                • If you didn&apos;t request this password reset, please ignore
                this email and consider changing your password immediately.
              </Text>
              <Text className='m-0 mb-1 text-[14px] leading-5 text-gray-700'>
                • This link will expire in 24 hours for your security.
              </Text>
              <Text className='m-0 text-[14px] leading-5 text-gray-700'>
                • For security, never share this link with anyone.
              </Text>
            </Section>

            <Hr className='my-6 border-gray-200' />

            {/* Help Section */}
            <Section className='mb-6'>
              <Text className='m-0 text-[14px] leading-5 text-gray-600'>
                Need help? Contact our support team at{' '}
                <Link
                  className='text-blue-600 underline'
                  href='mailto:support@company.com'
                >
                  support@company.com
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Section className='border-t border-gray-200 pt-6'>
              <Text className='m-0 mb-2 text-[12px] leading-4 text-gray-500'>
                This email was sent to {userEmail}
              </Text>
              <Text className='m-0 mb-2 text-[12px] leading-4 text-gray-500'>
                Company Name
                <br />
                123 Business Street, Suite 100
                <br />
                City, State 12345
              </Text>
              <Text className='m-0 text-[12px] leading-4 text-gray-500'>
                <Link className='text-gray-500 underline' href='#'>
                  Unsubscribe
                </Link>
                {' | '}© 2025 Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;
