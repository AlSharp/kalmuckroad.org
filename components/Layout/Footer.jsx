import Image from 'next/future/image';
import Link from 'next/link';
import styles from 'styles/layout.module.scss';
import classNames from 'classnames/bind';

export default function Footer() {
  const cx = classNames.bind(styles);
  return (
    <footer>
      <div className={cx('footerLayout')}>
        <div className="flex flex-col lg:flex-row min-h-full w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-5 px-2 md:px-6 justify-between mx-auto">
          <div className="order-1">
            <ul className="text-center lg:text-left">
              <li className="mb-2">
                <Link href="/">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">Home</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">About Us</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/events">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">Events</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/life">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">Temple Life</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gallery">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">Gallery</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-center order-3 lg:order-2">
            <div className="mx-auto">
              <Image width={80} height={80} src="/favicon.png" alt="KalmuckRoad Software icon"/>
            </div>
            <div className="text-center mb-1 mt-5 lg:mt-0">
              <p>Copyright © 2022 Kalmyk-Mongolian Buddhist Center</p>
            </div>
          </div>
          <div className="order-2 lg:order-3">
            <ul className="text-center lg:text-left">
              <li className="mb-2">
                <Link href="/donate">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">Join & Support</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <a className="font-semibold text-tibet-red hover:text-tibet-red-light hover:underline">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}