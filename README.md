## AWS Amplify Next.js (App Router) Starter Template

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.


## Useful Links
- https://stackoverflow.com/questions/78136359/customizing-aws-amplify-login-page-placing-header-and-footer-outside-amplify-co
- https://ui.docs.amplify.aws/react/connected-components/authenticator/customization
- https://blog.kylegalbraith.com/customizing-the-aws-amplify-authentication-ui-with-your-own-react-components/


### Expectations
- Can Use AWS Amplify to secure API endpoints and pages - WIP works in dummy repo - Done
- Can see expected login page UI changes - WIP - move to another story?
- Can log in - Done
- Can log out - Done
- Have example protected page - Don
- Have example unprotected page - Done
- Have example protected API - Done
- Have example unprotected API - Done
- Logging out should take you to the root page, but should then forward you to /login - Done

NOTE: Middlware may prevent access to public images - fixed