import styles from './header.module.css'
import Link from 'next/link'

const navItems = [
  { href: '/', title: 'new' },
  { href: '/news/best', title: 'best' },  // TODO: Create a new page for best stories https://www.postman.com/devrel/workspace/hackernews/documentation/13191452-f8f00d06-994f-4d1a-b0b5-2df4800fa64d
  { href: '/', title: 'past' },
  { href: '/', title: 'show' },
  { href: '/', title: 'ask' },
  { href: '/', title: 'show' },
  { href: '/', title: 'jobs' },
  { href: '/', title: 'submit' }
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link href="/">
          <span className={styles.logo}>
            <span className={styles.n}>N</span>
          </span>
          <span className={styles['site-title']}>Hacker Next</span>
        </Link>
        <div className={styles.nav}>
          <ul className={styles['nav-ul']}>
            {navItems.map(({ href, title }) => (
              <li key={href}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <Link href="/" className={styles.login}>
          login
        </Link>
      </div>
    </header>
  )
}
