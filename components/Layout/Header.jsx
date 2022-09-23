import styles from 'styles/layout.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/future/image';

export default function Header() {

  const onMenuClick = () => {
    const menu = document.querySelector('nav.temple-nav-menu');
    menu.classList.toggle('-right-full');
    menu.classList.toggle('right-0');
  }

  const cx = classNames.bind(styles);
  return (
    <header>
      <div className={cx('layoutHeader', 'flex md:px-12 px-2 pt-2 pb-2 justify-between')}>
        <div className={cx('templeLogoWrapper', 'flex')}>
          <div className={cx('templeLogoImage', 'flex items-center mr-2')}>
            <Image width={123} height={68} src="/emblem.png" alt="Kalmuck Road Temple Emblem" />
          </div>
          <div className={cx('templeLogoTitle', 'flex items-center')}>
            <div className="xl:text-4xl sm:text-3xl text-[1.2rem] leading-[1.35rem] sm:w-auto w-16 font-bold text-tibet-red">
              Tashi Lhunpo Temple
            </div>
          </div>
        </div>
        <div className={cx('temple-nav flex xlg:flex-col justify-between')}>
          <div className={cx('temple-social-links', 'flex flex-col sm:flex-row justify-between sm:justify-end items-center')}>
            <button className="px-3 py-1">
              <svg className="fill-[#4267B2]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </button>
            <button className="px-3 py-1">
              <Image width={24} height={24} src="/instagram_icon.svg" alt="Instagram" />
            </button>
          </div>
          <div className={cx('temple-nav-menu-container', 'flex items-center xlg:items-end ml-2')}>
            <button className={cx('temple-nav-menu-button', 'xlg:hidden')} onClick={onMenuClick}>
              <svg className="w-12 h-12 text-tibet-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <nav className={cx('temple-nav-menu', 'fixed top-20 buttom-0 -right-full bg-kalmyk-yellow w-64 xlg:w-auto md:auto xlg:static pt-4 xlg:pt-0')}>
              <ul className="xlg:flex">
                <li>
                  <a className="block py-2 xlg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">About Us</a>
                </li>
                <li>
                  <a className="block py-2 xlg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Events</a>
                </li>
                <li>
                  <a className="block py-2 xlg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Temple Life</a>
                </li>
                <li>
                  <a className="block py-2 xlg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Gallery</a>
                </li>
                <li>
                  <a className="block py-2 xlg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Join & Support</a>
                </li>
                <li>
                  <a className="block py-2 xlg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}