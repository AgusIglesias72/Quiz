import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
// I have an issue here. When doing SSR to get the Session, I get a 'module 'v8' not found' error I couldn't fix.
// This results in a micro delay in session data. Not big deal, but I would like to fix it.
// Next two imports are the ones I used in the SSR solution, same as getServerSideProps at the bottom
// import { getServerSession } from 'next-auth/next'
// import { authOptions } from '../pages/api/auth/[...nextauth]'
import { IconButton, Tooltip } from '@mui/material'
import OutsideAlerter from '../Hooks/useOutsideAlert'
import { MENU_ITEMS } from '../utils/menuItems'

export default function Navbar() {
  const { data: session } = useSession()

  const IconComponent = () => {
    const redirectTo: string = !session ? '/api/auth/signin' : '/profile'
    const toolmessage: string = !session ? 'Sign In' : 'My Account'
    const imageUrl: string | undefined | null = session
      ? session?.user?.image
      : '/account.svg'

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
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/exquizit.svg"
            alt="ExQuizIt logo"
            width={360}
            height={80}
            className={styles.imageLogo}
          />
        </div>
        <menu className={styles.menu}>
          {MENU_ITEMS.map((item, index) => (
            <Link key={index} href={item.href} style={{ cursor: 'pointer' }}>
              {item.name}
            </Link>
          ))}
        </menu>
        <div className={styles.account}>
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

// export async function getServerSideProps(context: any) {
//   const session = await getServerSession(context.req, context.res, authOptions)

//   return {
//     props: {
//       session,
//     },
//   }
// }
