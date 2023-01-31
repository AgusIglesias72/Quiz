import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        <Image src="/exquizit.svg" alt="Vercel Logo" width={360} height={80} />
      </div>
      <menu className={styles.item + ' ' + styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </menu>
      <div className={styles.item}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={40}
          height={40}
          className={styles.profile}
        />
      </div>
    </div>
  )
}
