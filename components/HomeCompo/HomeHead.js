import Head from "next/head"
const HomeHead = () => {
  return (
    <Head>
        <title>BlogiFy</title>
        <meta property="og:title" content='Blog Website' key="title" />
        <meta name="description" content="A Blog Website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default HomeHead