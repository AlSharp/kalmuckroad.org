import styles from 'styles/gallery.module.scss';
import Head from 'next/head';
import { useState } from 'react';
import classNames from 'classnames/bind';
import AlbumCard from 'components/Cards/AlbumCard';
import { getCloudHost } from 'utils';

export async function getStaticProps() {
  const res = await fetch(`${getCloudHost()}/api/albums?populate=*`);
  const { data } = await res.json();

  return {
    props: { data }, revalidate: 10
  }
}

export default function Gallery({ data }) {
  const [albums, setAlbums] = useState(data);
  
  const cx = classNames.bind(styles);

  const renderAlbumList = albums => {
    return (
      <>
        <h2 className="text-2xl text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-8">
          Photo Albums
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {
            albums.map(album =>
              <AlbumCard key={album.id} className="bg-white rounded-lg shadow-lg" album={album} /> 
            )
          }
        </div>
      </>
    )
  }

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
        { renderAlbumList(albums) }
      </div>
    </div>
  )
}