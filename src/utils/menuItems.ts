type MenuItem = {
  name: string
  href: string
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Quizzes',
    href: '/quizzes',
  },
  {
    name: 'Play',
    href: '/quizzes/play',
  },
  {
    name: 'Stats',
    href: '/stats',
  },
] // List of Menu Items Titles and its href. Used for all renderings
