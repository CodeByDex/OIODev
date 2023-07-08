This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Next-Auth Setup
In order to make Next-Auth work on you machine you will need to create a .env.local file in your root level of the project.  It will need to contain the following entries:

GITHUB_ID=<GITHUB_CLIENT_ID>  
GITHUB_SECRET=<GITHUB_CLIENT_SECRET>  
NEXTAUTH_URL=http://localhost:3000  
NEXTAUTH_SECRET=<NEXTAUTH_SECRET_KEY>  
WHITELIST_EMAILS="foo@foo.foo, bar@foo.foo"  
  
https://blog.logrocket.com/how-to-use-nextauth-js-client-side-authentication-next-js/

## MongoDB
In order to use the mongo db components of this project you will need to configure a environment variable for the db connection:

MONGODB_URI="mongodb://127.0.0.1:27017/OIODevDB"

