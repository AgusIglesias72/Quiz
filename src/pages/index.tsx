import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import PageLayout from '../Components/PageLayout'
import MainPage from '../Components/MainPage'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <MainPage />
      </div>
    </PageLayout>
  )
}

export default Home
// Testimonials
