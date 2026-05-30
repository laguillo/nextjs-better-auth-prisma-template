import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "react-email";

type VerifyEmailProps = {
  username: string;
  verifyUrl: string;
};

const VerifyEmail = (props: VerifyEmailProps) => {
  const { username, verifyUrl } = props;
  return (
    <Html dir="ltr" lang="en">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 py-10 font-sans">
          <Container className="mx-auto max-w-150 rounded-xl bg-white p-8">
            <Section>
              <Text className="mt-0 mb-4 font-bold text-[24px] text-gray-900">
                Verify your email address
              </Text>

              <Text className="mt-0 mb-6 text-[16px] text-gray-700 leading-6">
                Thanks {username} for signing up! To complete your registration
                and secure your account, please verify your email address by
                clicking the button below.
              </Text>

              <Section className="mb-8 text-center">
                <Button
                  className="box-border rounded-[6px] bg-blue-600 px-8 py-3 font-medium text-[16px] text-white no-underline"
                  href={verifyUrl}
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="mt-0 mb-6 text-[14px] text-gray-600 leading-5">
                If the button doesn&apos;t work, you can copy and paste this
                link into your browser:
                <br />
                {verifyUrl}
              </Text>

              <Text className="mt-0 mb-8 text-[14px] text-gray-600 leading-5">
                This verification link will expire in 24 hours. If you
                didn&apos;t create an account, you can safely ignore this email.
              </Text>

              <Hr className="my-6 border-gray-200" />

              <Text className="m-0 text-[12px] text-gray-500 leading-4">
                Best regards,
                <br />
                The Team
              </Text>
            </Section>

            <Section className="mt-8 border-gray-200 border-t pt-6">
              <Text className="m-0 text-center text-[12px] text-gray-400 leading-4">
                Company Name
                <br />
                123 Business Street, Suite 100
                <br />
                City, State 12345
              </Text>

              <Text className="m-0 mt-2 text-center text-[12px] text-gray-400 leading-4">
                <a className="text-gray-400 underline" href="/">
                  Unsubscribe
                </a>{" "}
                | © 2026 Company Name. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerifyEmail;
