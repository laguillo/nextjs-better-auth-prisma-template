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
} from '@react-email/components';

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
        <Body className='bg-gray-100 py-[40px] font-sans'>
          <Container className='mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px]'>
            {/* Header */}
            <Section className='mb-[32px] text-center'>
              <Heading className='m-0 mb-[8px] text-[28px] font-bold text-gray-900'>
                Reset Your Password
              </Heading>
              <Text className='m-0 text-[16px] text-gray-600'>
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className='mb-[32px]'>
              <Text className='mt-0 mb-[16px] text-[16px] leading-[24px] text-gray-700'>
                Hello {username},
              </Text>
              <Text className='mt-0 mb-[16px] text-[16px] leading-[24px] text-gray-700'>
                We received a password reset request for your account associated
                with <strong>{userEmail}</strong>.
              </Text>
              <Text className='mt-0 mb-[24px] text-[16px] leading-[24px] text-gray-700'>
                Click the button below to create a new password. This link will
                expire in 24 hours for security reasons.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className='mb-[32px] text-center'>
              <Button
                className='box-border inline-block rounded-[8px] bg-blue-600 px-[32px] py-[14px] text-[16px] font-semibold text-white no-underline'
                href={resetUrl}
              >
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className='mb-[32px]'>
              <Text className='m-0 mb-[8px] text-[14px] leading-[20px] text-gray-600'>
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
            <Section className='mb-[32px] rounded-[8px] border border-yellow-200 bg-yellow-50 p-[20px]'>
              <Text className='m-0 mb-[8px] text-[14px] leading-[20px] font-semibold text-yellow-900'>
                ⚠️ Security Notice:
              </Text>
              <Text className='m-0 mb-[4px] text-[14px] leading-[20px] text-gray-700'>
                • If you didn&apos;t request this password reset, please ignore
                this email and consider changing your password immediately.
              </Text>
              <Text className='m-0 mb-[4px] text-[14px] leading-[20px] text-gray-700'>
                • This link will expire in 24 hours for your security.
              </Text>
              <Text className='m-0 text-[14px] leading-[20px] text-gray-700'>
                • For security, never share this link with anyone.
              </Text>
            </Section>

            <Hr className='my-[24px] border-gray-200' />

            {/* Help Section */}
            <Section className='mb-[24px]'>
              <Text className='m-0 text-[14px] leading-[20px] text-gray-600'>
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
            <Section className='border-t border-gray-200 pt-[24px]'>
              <Text className='m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500'>
                This email was sent to {userEmail}
              </Text>
              <Text className='m-0 mb-[8px] text-[12px] leading-[16px] text-gray-500'>
                Company Name
                <br />
                123 Business Street, Suite 100
                <br />
                City, State 12345
              </Text>
              <Text className='m-0 text-[12px] leading-[16px] text-gray-500'>
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
