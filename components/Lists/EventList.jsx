import EventCard from 'components/Cards/EventCard';
import dayjs from 'dayjs';
import { getCloudHost } from 'utils';

export default function EventList({ events, title }) {
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
          events.map(event =>
            <EventCard
                key={event.id}
                className="bg-white rounded-lg shadow-lg h-full"
                eventName={event.attributes.title}
                day={dayjs(event.attributes.date_time).format('MMM D YYYY')}
                time={dayjs(event.attributes.date_time).format('hh:mm A')}
                eventDesc={event.attributes.description}
                imgSrc={`${getCloudHost()}${event.attributes.image.data.attributes.formats.small.url}`}
                eventURL={`events/${event.attributes.title.split(' ').join('_')}`}
            /> 
          )
        }
      </div>
    </>
  )
}