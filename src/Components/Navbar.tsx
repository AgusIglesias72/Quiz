import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { IconButton, Tooltip } from '@mui/material'
import OutsideAlerter from '../Hooks/useOutsideAlert'

const MENU_ITEMS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
] // List of Menu Items Titles and its href. Used for all renderings

export default function Navbar() {
  const { data: session } = useSession()

  const IconComponent = () => {
    const redirectTo = !session ? '/api/auth/signin' : '/profile'
    const toolmessage = !session ? 'Iniciar Sesión' : 'Mi Cuenta'
    const imageUrl = session ? session?.user?.image : '/account.svg'

    const imageStyle = session
      ? { borderRadius: '50%', cursor: 'pointer' }
      : { cursor: 'pointer' }

    return (
      <Link href={redirectTo}>
        <Tooltip title={toolmessage}>
          <IconButton>
            <Image
              src={imageUrl as string}
              style={imageStyle}
              alt="Profile Logo"
              width={35}
              height={35}
            />
          </IconButton>
        </Tooltip>
      </Link>
    )
  } // returns the Icon Base Component and renders the image or a generic Icon if user not authenticated

  const activeMenu = () => {
    const navbar = document.querySelector('.' + styles.navbar)
    navbar?.classList.toggle(styles.active)
  } // toggles the menu active class

  // Close may be done with the hamburger and the OutsideAlerter hook

  return (
    <OutsideAlerter classReference={styles.active}>
      <div className={styles.navbar} id="navbar">
        <div className={styles.logo}>
          {/* <Link href="/"> */}
          <Image
            src="/exquizit.svg"
            alt="Vercel Logo"
            width={360}
            height={80}
          />
          {/* </Link> */}
        </div>
        <menu className={styles.item + ' ' + styles.menu}>
          {MENU_ITEMS.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.name}
            </Link>
          ))}
        </menu>
        <div className={styles.item}>
          <IconComponent />
        </div>
        <div className={styles.hamburger} onClick={activeMenu}>
          <Image
            src="/hamburgerWhite.svg"
            alt="Vercel Logo"
            width={35}
            height={35}
          />
        </div>
      </div>
    </OutsideAlerter>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions)

  return {
    props: {
      session,
    },
  }
}
