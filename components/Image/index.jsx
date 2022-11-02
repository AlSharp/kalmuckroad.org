import Image from 'next/future/image';
import { getCloudHost } from 'utils';

export function ImageDetail({ photoId, photos }) {

  const photo = photos.find(photo => photo.id == photoId);
  const photoURL = `${getCloudHost()}${photo.attributes.formats.large.url}`;
  const alt = photo.attributes.alternativeText;

  return (
    <Image
      fill
      className="!relative rounded shadow-lg h-full w-full"
      style={{ objectFit: 'cover' }}
      src={photoURL}
      alt={alt}
    />
  )
}