"use client";

import { View, Text, useTheme, withAuthenticator, Heading, Button, useAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import '@aws-amplify/ui/dist/styles.css';
import '../utils/hideAmplifyTabs.css';
// TODO: Setup TOTP page??
function Login({ user }: { user?: AuthUser }) {
  useEffect(() => {
    if (user) {
      redirect("/");
    }
  }, [user]);
  return null;
}

// Test component customizing for withAuthenticator
const testComponents = {
  // SignIn() {},
  // Footer() {
  //   const { tokens } = useTheme();

  //   return (
  //     <View textAlign="center" padding={tokens.space.large}>
  //       <Text color={tokens.colors.neutral[80]}>
  //         &copy; All Rights Reserved TESTTT
  //       </Text>
  //     </View>
  //   );
  // }
  SignIn: {
    Header() {
      const { tokens } = useTheme();
      // TODO: Add image at top
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Login
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },
};

// export default withAuthenticator(Login); // Not customized
export default withAuthenticator(
  Login, 
  {
    initialState: 'signIn',
    components: testComponents 
  }
); // Customized