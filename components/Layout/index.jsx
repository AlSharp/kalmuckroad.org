import Header from './Header';
import Footer from './Footer';
import styles from 'styles/layout.module.scss';
import classNames from 'classnames/bind';

export default function Layout({ children }) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('appContainer')}>
      <Header />
      <main>
        <div className={cx('mainLayout')}>
          <div className={cx('pageContainer', 'w-full')}>
            { children }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}