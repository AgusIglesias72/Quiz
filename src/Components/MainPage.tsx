import styles from '../styles/MainPage.module.css'

export default function MainPage() {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.titleMessage}>
        Choose from our 1000 amazing ExQuizIts, or{' '}
        <a href="https://nextjs.org">create your own</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </main>
  )
}
