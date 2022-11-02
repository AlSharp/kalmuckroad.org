import styles from 'styles/components.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/future/image';
import Link from 'next/link';
import { getCloudHost } from 'utils';

export default function AlbumCard({ album, className }) {

  const albumName = album.attributes.name;
  const firstPhotoURL = `${getCloudHost()}${album.attributes.photos.data[0].attributes.formats.small.url}`;
  const album_name = albumName.split(' ').join('_');
  const albumURL = 'gallery/' + album_name;

  const cx = classNames.bind(styles);

  return (
    <Link
      href={ albumURL }
      as={`/gallery/${album_name}`}
    >
      <a>
        <div className={cx('albumCard', className)}>
          <div className="w-full h-64">
            <Image
              fill
              className="!relative rounded-t-lg"
              style={{ objectFit: 'cover' }}
              src={firstPhotoURL}
              alt=""
            />
          </div>
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                { albumName }
              </h5>
          </div>
        </div>
      </a>
    </Link>
  )
}