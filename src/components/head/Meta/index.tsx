import Head from 'next/head'

type Props = {
  title: string
  keywords: string
  description: string
}

const Meta = ({ title, keywords, description }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'GotPop Starter',
  keywords: 'web development, programming',
  description: 'A Next.js starter template'
}

export default Meta
