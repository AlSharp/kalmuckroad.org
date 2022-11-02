import Link from "next/link";
import Image from "next/future/image";
import { useRouter } from "next/router";
import BackIcon from "components/Icons/BackIcon";
import { getCloudHost } from 'utils';

export async function getStaticPaths() {

  let paths = [];

  const res1 = await fetch(`${getCloudHost()}/api/albums`);
  const { data: albums } = await res1.json();

  for (const album of albums) {
    const album_name = album.attributes.name.split(' ').join('_');
    const res2 = await fetch(`${getCloudHost()}/api/albums?filters[id][$eqi]=${album.id}&populate=*`);
    const { data: [{ attributes: { photos: { data: photos } } }] } = await res2.json();
    photos.forEach(photo => {
      paths.push({ params: { album: album_name, photo: photo.id.toString() } });
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { album: album_name, photo: photoId } = context.params;
  const albumName = album_name.split('_').join(' ');
  const res = await fetch(`${getCloudHost()}/api/albums?filters[name][$eqi]=${albumName}&populate=*`);
  const { data: [{ attributes: { photos: { data: photos } } }] } = await res.json();
  const photo = photos.find(photo => photo.id == photoId);
  return {
    props: {
      album_name,
      photo
    },
  };
}

export default function PhotoPage({ album_name, photo }) {
  const router = useRouter();

  const photoFormat = photo.attributes.formats.large || photo.attributes;
  const url = photoFormat.url;
  const photoURL = `${getCloudHost()}${url}`;
  const { width, height } = photoFormat;

  return (
    <div className="relative w-full h-screen bg-gray-800">
      <Link href={`/gallery/${album_name}`}>
        <a className="relative z-20 flex items-center w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:py-12 py-6 text-xl text-white/80 hover:text-white">
          <BackIcon className="w-5 h-5 mr-2" />
          { `Return back to album` }
        </a>
      </Link>

      <div className="absolute inset-0">
        <div className="flex items-center justify-center h-screen">
          <div className="flex justify-center w-full">
            <Image
              width={width}
              height={height}
              className="!relative rounded shadow-lg"
              style={{ width: "auto", height: "auto" }}
              src={photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}