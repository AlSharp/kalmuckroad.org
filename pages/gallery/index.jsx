import styles from 'styles/gallery.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames/bind';
import AlbumList from 'components/Lists/AlbumList';
import BackIcon from 'components/Icons/BackIcon';
import { getCloudHost } from 'utils';

export async function getStaticProps() {
  const res = await fetch(`${getCloudHost()}/api/albums?populate=*`);
  const { data: albums } = await res.json();

  return {
    props: { albums }, revalidate: 10
  }
}

export default function Gallery({ albums }) {
  const cx = classNames.bind(styles);

  return (
    <div className="page">
      <Head>
        <title>Kalmyk-Mongolian Buddhist Center - Photo Gallery</title>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Photos"
          key="desc"
        />
        <meta property="og:title" content="Kalmyk-Mongolian Buddhist Center Photo Gallery" />
        <meta
          property="og:description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Photos"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kalmuckroad.org/gallery" />
        <meta
          property="og:image"
          content="https://kalmuckroad.org/og_image.jpg"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <div className={cx('albumList', 'w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:py-12 py-6')}>
        <Link href="/">
          <a className="flex items-center py-2 lg:py-1 w-max xl:text-lg text-tibet-red hover:text-tibet-red-light font-semibold hover:underline mb-6">
            <BackIcon className="w-5 h-5 mr-2" />
            Return back to home
          </a>
        </Link>
        <AlbumList albums={albums} title="Photo Albums" />
      </div>
    </div>
  )
}