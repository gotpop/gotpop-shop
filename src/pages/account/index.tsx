import LayoutStandard from '@layouts/LayoutStandard'
import Meta from '@head/Meta'
import { NextPage } from 'next'

const Account: NextPage = () => {
  return (
    <LayoutStandard>
      <>
        <Meta />
        <article>
        <h2>Account</h2>
        <p>This application is a &apos;living demo&apos;. The first stage was to have a raw CSS front end performing CRUD operations to a PostgreSQL database via Prisma.</p>

        <p>However as I&apos;m sure you can see there&apos;s not yet any concept of users or login. So as a next step I plan to use next-auth.js to autheticate users, which means I will then be able to build out things like a user profile and saved carts etc.</p>
        <p>I have authentication via NextAuth in development locally and will push it to production as soon as it&apos;s stable.</p>
        <p>In addition to this I&apos;d like to add:</p>
        <ul>
          <li>Increased testing coverage</li>
          <li>Large dataset of dummy products to enable searching etc</li>
          <li>Continued performance, browser testing & UX improvments</li>
        </ul>
        </article>
      </>
    </LayoutStandard>
  )
}

export default Account
