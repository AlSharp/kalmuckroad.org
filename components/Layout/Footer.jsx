import Image from 'next/image'
import styles from 'styles/layout.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src="./favicon.png" alt="KalmuckRoad Software icon"/>
      </div>
      <div>
        <p>Designed and developed by KalmuckRoad Software, Inc.</p>
        <p>version {process.env.version}</p>
      </div>
    </footer>
  )
}