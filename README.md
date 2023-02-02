# GotPop Shop

A full stack e-commerce application.

## Tech Stack

* Next.js (13)
* Raw CSS transpiled with PostCSS
* Prisma
* TypeScript
* PostgreSQL
* Cypress (E2E & component)
* GitHub Actions

## Getting Started

This app was developed with Node 18. 

### Local 

First you must set up the `.env` file in order to connect to the database. You can use the starter `.env.sample` located in the root.

```shell
DATABASE_URL=DATABASSECRETKEY
```

Once you have the database environment variable set you can install and run the project. If you would like to use your own database you can host them for free at railway.app. You can grab the full connection string from the connect tab in the settings page. Building the project should automatically seed the new db.

* `yarn`
* `yarn build`
* `yarn start`

## Environments

| Local | Preview | Live | 
| :--- | :----- | :------ |
| [Localhost](http://localhost:3000) | [Preview](https://gotpop-shop-git-main-teamgotpop.vercel.app) | [Live](https://gotpop-shop.vercel.app)  ![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=gotpop-starter-teamgotpop)| 

## Dashboards

| Vercel | Railway |
| :--- | :----- |
| [Dashboard](https://vercel.com/dashboard) | [Dashboard](https://railway.app) |

<h1 align="center">
	<img width="100%" src="./public/shop.png" alt="Image of shop website">
</h1>
