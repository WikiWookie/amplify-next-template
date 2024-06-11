"use client";

import { useTheme, withAuthenticator, Heading, Image } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import '@aws-amplify/ui/dist/styles.css';
import '../utils/hideAmplifyLoginTabs.css';
import '../utils/customAuthenticatorStyles.css';

function Login({ user }: { user?: AuthUser }) {
  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);
  return null;
}

const formFields = {
  signIn: {
    username: {
      placeholder: 'Username',
      isRequired: true,
      label: 'Email:',
      labelHidden: true
    },
    password: {
      placeholder: 'Password',
      isRequired: true,
      label: 'Password:',
      labelHidden: true
    },
  },
}

const customLoginSettings = { // Type = DefaultComponents
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <>
          <div style={{ minWidth: "100%", display: "flex", justifyContent: "center" }}>
            <Image
              alt="Amplify logo"
              src="images/amplify.svg" // This may not show if the middleware doesn't allow access to the public directory
              backgroundColor="initial"
              width="8rem"
              opacity="100%"
              onClick={() => alert('📸 Say cheese!')}
            />
          </div>
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={6}
          >
            Login
          </Heading>
        </>
      );
    },
    // TODO: Implement footer work in another story to in order to confirm/implement forgot password functionality.
    Footer() {
      return (
        <>
        </>
      );
    }
  }
};

export default withAuthenticator(
  Login,
  { variation: 'default', components: customLoginSettings, formFields: formFields }
);