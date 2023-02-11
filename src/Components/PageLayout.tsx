import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function PageLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        style={{
          marginTop: '4rem',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

PageLayout.defaultProps = {
  title: 'ExQuizIt',
  description: 'ExQuizIt - A Quiz App for Everyone',
}
