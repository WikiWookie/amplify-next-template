// https://aws.amazon.com/blogs/mobile/next-js-api-routes-with-aws-amplify/

import { getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';
import { runWithAmplifyServerContext } from '../../../utils/amplify-utils';

// This request assumes a valid cookie is supplied in the req
export async function GET(request: Request) {
  try {
    const user = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec)
    });
  } catch (error: any) {
    switch (true) {
      case (error.name === "UserUnAuthenticatedException"): {
        return new Response("", { status: 401, statusText: "Unauthorized" });
      }
      default: {
        return new Response("", { status: 500, statusText: "Internal Server Error" });
      }
    }
  }
  const testResponse = { 'test': 'protected' };
  return Response.json(testResponse);
}