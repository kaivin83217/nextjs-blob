import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
export default function FirstPost() {
  console.log('first page')
  return (<>
  <Head>
  <title>First Post113</title>
  </Head>

  <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  </>)
}