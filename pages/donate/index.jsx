import styles from 'styles/donate.module.scss';
import classNames from 'classnames/bind';
import Head from 'next/head';
import Image from 'next/future/image';

export default function Donate() {
  const cx = classNames.bind(styles);

  return (
    <div className="page">
      <Head>
        <title>Kalmyk-Mongolian Buddhist Center - Join & Support</title>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Donate"
          key="desc"
        />
        <meta property="og:title" content="Kalmyk-Mongolian Buddhist Center Join & Support" />
        <meta
          property="og:description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Donate"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kalmuckroad.org/donate" />
        <meta
          property="og:image"
          content="https://kalmuckroad.org/og_image.jpg"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <div className={cx('donate', 'w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:py-12 py-6')}>
        <h1 className="text-2xl text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-8">
          Donate
        </h1>
        <h2 className="text-lg text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-8">
          Please scan the QR code below to donate:
        </h2>
        <div className="qr-code flex justify-center mb-8">
          <Image
            width={400}
            height={400}
            src="/qrcode_to_donate.png"
            alt="Kalmuck Road Buddhist Temple QR code"
          />
        </div>
        <div className="for-checks flex flex-col justify-center mb-8 text-center">
          <h3 className="text-lg text-txt-dark font-nunito-sans font-bold mb-4">For donation by check, please mail to:</h3>
          <p>Kalmyk Mongolian Buddhist Center</p>
          <p>Treasurer,</p>
          <p>c/o D. Tchourumoff</p>
          <p>122 Squirrel Tree Lane</p>
          <p>Mt. Laurel, NJ 08054</p>
        </div>
      </div>
    </div>
  )
}