"use client";

import { View, Text, useTheme, withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import '@aws-amplify/ui/dist/styles.css';

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
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved TESTTT
        </Text>
      </View>
    );
  }
};

// export default withAuthenticator(Login); // Not customized
export default withAuthenticator(Login, {components: testComponents }); // Customized