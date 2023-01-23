import styles from 'styles/components.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { getCloudHost } from 'utils';

export default function EventMiniCard({ eventName, day, time, className }) {

  const cx = classNames.bind(styles);

  const eventURL = 'events/' + eventName.split(' ').join('_');

  return (
    <div className={cx('eventCard', className)}>
      <div className="flex flex-col md:flex-row md:justify-between p-2">
        <div className="mb-1 md:mb-0 text-center md:text-start">
            <Link href={eventURL}>
                <a>
                    <h6 className="font-bold text-lg text-txt-on-kalmyk-blue">
                        { eventName }
                    </h6>
                </a>
            </Link>
        </div>
        <div className="text-center md:text-start">
            <h6 className="font-bold text-base md:text-lg text-txt-on-kalmyk-blue">
            {`${day}, ${time}`}
            </h6>
        </div>
      </div>
    </div>
  )
}