import styles from 'styles/events.module.scss';
import classNames from 'classnames/bind';
import Head from 'next/head';
import Image from 'next/future/image';

export default function Events() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('page', 'w-full min-h-[inherit] flex items-center')}>
      <Head>
        <title>Kalmyk-Mongolian Buddhist Center - Events</title>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Events"
          key="desc"
        />
        <meta property="og:title" content="Kalmyk-Mongolian Buddhist Center Events" />
        <meta
          property="og:description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Events"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kalmuckroad.org/events" />
        <meta
          property="og:image"
          content="https://kalmuckroad.org/og_image.jpg"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <div className="'w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:py-12 py-6">
        <div>
          <h1 className="text-md text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-8">
            Content will be added soon
          </h1>
        </div>
        <div className="flex justify-center mb-8">
          <Image
              width={200}
              height={200}
              src="/favicon.png"
              alt="Kalmuck Road Buddhist Temple QR code"
            />
        </div>
      </div>
    </div>
  )
}