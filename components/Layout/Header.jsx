import styles from 'styles/layout.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/future/image';

export default function Header() {

  const onMenuClick = () => {
    const menu = document.querySelector('nav.temple-nav-menu');
    menu.classList.toggle('-right-full');
    menu.classList.toggle('right-0');
  }

  const onMenuClose = () => {
    const menu = document.querySelector('nav.temple-nav-menu');
    menu.classList.toggle('right-0');
    menu.classList.toggle('-right-full');
  }

  const cx = classNames.bind(styles);
  return (
    <header>
      <div className={cx('headerLayout', 'flex items-center')}>
        <div className="flex w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-2 px-2 md:px-6 justify-between mx-auto">
          <div className={cx('templeLogoImage', 'hidden lg:block flex items-center mr-3 w-36')}>
            <Image fill className="!relative" src="/emblem.png" alt="Kalmuck Road Temple Emblem" />
          </div>
          <div className="flex w-full lg:flex-col">
            <div className={cx('templeLogoWrapper', 'flex flex-1 justify-between')}>
              <div className={cx('templeLogoImage', 'lg:hidden flex items-center mr-2 w-24 md:w-36')}>
                <Image fill className="!relative !h-auto !w-auto" src="/emblem.png" alt="Kalmuck Road Temple Emblem" />
              </div>
              <div className={cx('templeLogoTitle', 'flex items-center')}>
                <div className="flex flex-col lg:flex-row text-xl xs:text-2xl sm:!text-3xl md:!text-4xl font-nunito-sans font-extrabold text-tibet-red">
                  <h1 className="lg:mr-3">Kalmyk-Mongolian</h1>
                  <h1>Buddhist Center</h1>
                </div>
              </div>
              <div className={cx('temple-social-links', 'flex flex-col lg:flex-row justify-center')}>
                <button className="px-3 py-1">
                  <svg className="fill-[#4267B2]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </button>
                <button className="px-3 py-1">
                  <Image className="max-w-none" width={24} height={24} src="/Twitter_blue.svg" alt="Twitter" />
                </button>
              </div>
            </div>
            <div className={cx('temple-nav flex justify-between lg:justify-end lg:mt-3')}>
              <div className={cx('temple-nav-menu-container', 'flex items-center ml-2')}>
                <button className={cx('temple-nav-menu-button', 'lg:hidden')} onClick={onMenuClick}>
                  <svg className="w-12 h-12 text-tibet-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
                <nav className={cx('temple-nav-menu', 'flex justify-between items-start fixed lg:relative top-0 buttom-0 -right-full lg:right-auto bg-kalmyk-yellow w-full lg:w-auto h-full z-10 lg:justify-items-end')}>
                  <ul className="lg:flex">
                    <li>
                      <a className="block py-2 lg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">About Us</a>
                    </li>
                    <li>
                      <a className="block py-2 lg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Events</a>
                    </li>
                    <li>
                      <a className="block py-2 lg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Temple Life</a>
                    </li>
                    <li>
                      <a className="block py-2 lg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Gallery</a>
                    </li>
                    <li>
                      <a className="block py-2 lg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Join & Support</a>
                    </li>
                    <li>
                      <a className="block py-2 lg:py-1 px-3 w-max xl:text-lg text-tibet-red font-semibold" href="#">Contact</a>
                    </li>
                  </ul>
                  <button
                    className="lg:hidden"
                    onClick={onMenuClose}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-14 h-14 fill-tibet-red">
                      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}