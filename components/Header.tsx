import Link from 'next/link'
import styles from '../styles/components/Header.module.css'
import Sidebar from './Sidebar'

export default function Header () {
  return (
    <div className={styles['nav']}>
      <div className={styles['navItems']}>
        <span className={styles["logo-title"]}>
          <a href="/">
            Das Zentrum
          </a>
        </span>
        <div className={styles['nav-right']}>
          <button className={styles['login-btn']}>LOGIN</button>
          {/* <div className={styles['side-toggle']}></div> */}
          <Sidebar/>
        </div>
      </div>
    </div>
  )
}
