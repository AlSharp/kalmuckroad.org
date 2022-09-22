import Header from './Header';
import Footer from './Footer';
import styles from 'styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <div className={styles.pageContainer}>
          { children }
        </div>
      </main>
      <Footer />
    </div>
  )
}