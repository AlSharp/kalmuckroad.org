import { useRouter } from 'next/router';
import Image from 'next/future/image';
import Link from 'next/link';
import { Modal } from 'components/Modal';
import BackIcon from 'components/Icons/BackIcon';
import { ImageDetail } from 'components/Image';
import { getCloudHost } from 'utils';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const res = await fetch(`${getCloudHost()}/api/albums`);
  const { data: albums } = await res.json();
  const paths = albums.map(album => ({ params: { album: album.attributes.name.split(' ').join('_') } }))
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const album_name = context.params.album;
  const albumName = album_name.split('_').join(' ');
  const res = await fetch(`${getCloudHost()}/api/albums?filters[name][$eqi]=${albumName}&populate=*`);
  const { data, meta } = await res.json();

  const description = data[0].attributes.description;

  if (description) {
    const descriptionContent = await remark().use(html).process(description);
    const descriptionHtml = descriptionContent.toString();
    return {
      props: {
        albumName: data[0].attributes.name,
        description: descriptionHtml,
        photos: data[0].attributes.photos.data,
        meta
      }
    }
  }

  return {
    props: {
      albumName: data[0].attributes.name,
      photos: data[0].attributes.photos.data,
      meta
    }
  }
}

export default function Album({ albumName, description, photos, meta }) {

  const router = useRouter();

  const album_name = albumName.split(' ').join('_');

  return (
    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:py-12 py-6">
      <Link href="/gallery">
        <a className="flex items-center py-2 lg:py-1 w-max xl:text-lg text-tibet-red hover:text-tibet-red-light font-semibold hover:underline">
          <BackIcon className="w-5 h-5 mr-2" />
          Return back to gallery
        </a>
      </Link>
      <h1 className="text-2xl text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-8">
        { albumName }
      </h1>
      {
        description
        ? <div className="album-description mb-8" dangerouslySetInnerHTML={{ __html: description }}/>
        : null
      }
      {router.query.photo && (
        <Modal
          onClose={() => {
            router.push(`/gallery/${album_name}`);
          }}
        >
          <ImageDetail photoId={router.query.photo} photos={photos} />
        </Modal>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {
          photos.map(photo => {
            const photoURL_sm = `${getCloudHost()}${photo.attributes.formats.small.url}`;
            const alt = photo.attributes.alternativeText;
            return (
              <div key={photo.id} className="w-full h-64">
                <Link
                  href={`/gallery/${album_name}/?photo=${photo.id}`}
                  as={`/gallery/${album_name}/${photo.id}`}
                >
                  <a>
                    <Image
                      fill
                      className="!relative"
                      style={{ objectFit: 'cover' }}
                      src={photoURL_sm}
                      alt={alt}
                    />
                  </a>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}