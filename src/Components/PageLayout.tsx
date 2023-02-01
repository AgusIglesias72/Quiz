import Head from 'next/head'
import Navbar from './Navbar'

export default function PageLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

PageLayout.defaultProps = {
  title: 'ExQuizIt',
  description: 'ExQuizIt - A Quiz App for Everyone',
}
