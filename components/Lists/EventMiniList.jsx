import styles from 'styles/components.module.scss';
import classNames from 'classnames/bind';
import EventMiniCard from "components/Cards/EventMiniCard";
import dayjs from 'dayjs';

export default function EventMiniList({ events, className }) {
    const cx = classNames.bind(styles);
    console.log('events: ', events);

    return (
        <div className={cx('event-mini-list', className)}>
            <div className="p-1">
                <h2 className="text-xl !leading-tight md:text-2xl lg:text-2xl text-txt-on-kalmyk-blue font-nunito-sans font-extrabold mb-5 text-center">
                    Upcoming events
                </h2>
                <div className="upcoming-events md:w-96 w-full mx-auto">
                    {
                        events.map(event => 
                            <EventMiniCard
                                className="mb-4"
                                key={event.id}
                                eventName={event.attributes.title}
                                day={dayjs(event.attributes.date_time).format('MMM D YYYY')}
                                time={dayjs(event.attributes.date_time).format('hh:mm A')}
                            />    
                        )
                    }
                </div>
            </div>
        </div>
    )
}