// https://aws.amazon.com/blogs/mobile/next-js-api-routes-with-aws-amplify/
// const {Auth: ssrAuth} = withSSRContext({ req: request }); 
// import { Amplify, withSSRContext } from "aws-amplify";

import { getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
// import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';
import { runWithAmplifyServerContext } from '../../../utils/amplify-utils';

// This request assume a valid cookie is supplied in the req
export async function GET(request: Request) {
  const test = { 'test': 'unprotected' };
  return Response.json(test);
}