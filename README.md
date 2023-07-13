# OIO Dev 

OIO Dev is a full-stack web application built using Next.JS to enables our dev team to market their software development services as freelance developers. Users can browse portfolios, create an account, and book a consult with developers. Consults are scheduled using the Calendly API to streamline for process.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Links](#project-links)
- [Questions](#questions)


## Technologies Used
[![Next.js](https://img.shields.io/badge/Next.js-v12.0.7-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-v17.0.2-blue)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://www.ecma-international.org/ecma-262/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v2.2.19-38B2AC)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v5.0-green)](https://www.mongodb.com/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v4.1.0-000000)](https://next-auth.js.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-v15.6.0-pink)](https://graphql.org/)
[![Heroku](https://img.shields.io/badge/Heroku-deployed-purple)](https://www.heroku.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green)](https://nodejs.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo_Server-v3.4.0-blue)](https://www.apollographql.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-v6.1.2-880000)](https://mongoosejs.com/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Installation

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

### Next-Auth Setup:
In order to make Next-Auth work on you machine you will need to create a .env.local file in your root level of the project.  It will need to contain the following entries:

GITHUB_ID=<GITHUB_CLIENT_ID>  
GITHUB_SECRET=<GITHUB_CLIENT_SECRET>  

GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>  
GOOGLE_CLIENT_SECRET=<GOOGLE_CLIENT_SECRET>  

FACEBOOK_CLIENT_ID=<FACEBOOK_CLIENT_ID>  
FACEBOOK_CLIENT_SECRET=<FACEBOOK_CLIENT_SECRET>  

NEXTAUTH_URL=http://localhost:3000  
NEXTAUTH_SECRET=<NEXTAUTH_SECRET_KEY>

WHITELIST_EMAILS="foo@foo.foo, bar@foo.foo"  
  
https://blog.logrocket.com/how-to-use-nextauth-js-client-side-authentication-next-js/

### MongoDB:
In order to use the mongo db components of this project you will need to configure a environment variable for the db connection:

MONGODB_URI="mongodb://127.0.0.1:27017/OIODevDB"



## Usage
To use this project, follow these steps:
1. Go to the site and create an account: https://www.oiodev.com/
2. Click "Find a Developer" to view developers' portfolios.
3. Click "Book a Consult" to schedule time with a developer.
4. Manage your account settings.


### Web Browser Full Page Views
![Full Screen Home Page](https://github.com/CodeByDex/OIODev/assets/120981491/f344d64a-34f7-4258-b966-c24533f9826a)


![Login Page](https://github.com/CodeByDex/OIODev/assets/120981491/623bd8eb-1cae-4ec2-90e9-442216265052)

![Browse Developers Full Page](https://github.com/CodeByDex/OIODev/assets/120981491/a66f90af-ef3b-422f-bb0e-1feb26bc9fcb)

![Dashboard Full Page Example](https://github.com/CodeByDex/OIODev/assets/120981491/48e614f5-6b35-4494-a833-a00f47f102cc)


### Mobile Photo Views

![Short Home Page Mobile](https://github.com/CodeByDex/OIODev/assets/120981491/2bc8648a-31ca-4d72-8a91-0cbf2b193e06)    
![Mobile Home Nav Bar](https://github.com/CodeByDex/OIODev/assets/120981491/0c818f6f-052b-4a05-9190-b85bcf2315a0)

![Browser Developers Mobile Preview](https://github.com/CodeByDex/OIODev/assets/120981491/8d157e32-9cb1-44cd-8c96-eed4d538a2f6)


## Project Links
  
Deployed Application: https://www.oiodev.com/ 

Github Repository: https://github.com/CodeByDex/OIODev

Team: [ChelseaLuevano](https://github.com/ChelseaLuevano), [Christianmsm](https://github.com/Christianmsm), [CodeByDex](https://github.com/CodeByDex), [Cyanasaurusrex](https://github.com/Cyanasaurusrex), [xwykoff](https://github.com/xwyckoff), [that_devguy](https://github.com/that_devguy)



## Questions

If you have any questions or issues, feel free to reach out to us via my GitHub repo: [OIO Dev](https://github.com/CodeByDex/OIODev)