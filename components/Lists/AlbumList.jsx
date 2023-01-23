import AlbumCard from 'components/Cards/AlbumCard';

export default ({ albums, title }) => {
  return (
    <>
      {
          title &&
          <h1 className="text-2xl text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-8">
              { title }
          </h1>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          albums.map(album =>
            <AlbumCard key={album.id} className="bg-white rounded-lg shadow-lg h-full" album={album} /> 
          )
        }
      </div>
    </>
  )
}