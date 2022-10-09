import Image from 'next/future/image';
import styles from 'styles/layout.module.scss';
import classNames from 'classnames/bind';

export default function Footer() {
  const cx = classNames.bind(styles);
  return (
    <footer>
      <div className={cx('footerLayout')}>
        <div className="flex flex-col bg-kalmyk-yellow py-5">
          <div className="mx-auto mb-5">
            <Image width={64} height={64} src="/favicon.png" alt="KalmuckRoad Software icon"/>
          </div>
          <div className="text-center">
            <p>Developer: Albert Sharapov</p>
            <p>version {process.env.version}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}