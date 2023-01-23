import styles from 'styles/events.module.scss';
import classNames from 'classnames/bind';
import Head from 'next/head';
import Link from 'next/link';
import EventList from 'components/Lists/EventList';
import BackIcon from 'components/Icons/BackIcon';
import { getCloudHost } from 'utils';

export async function getStaticProps() {
  const eventsRes = await fetch(`${getCloudHost()}/api/events?populate=*`);
  const { data: events } = await eventsRes.json();

  return {
    props: { events }, revalidate: 10
  }
}

export default function Events({ events }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('page', 'w-full min-h-[inherit] flex items-center')}>
      <Head>
        <title>Kalmyk-Mongolian Buddhist Center - Events</title>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Events"
          key="desc"
        />
        <meta property="og:title" content="Kalmyk-Mongolian Buddhist Center Events" />
        <meta
          property="og:description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ) - Events"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kalmuckroad.org/events" />
        <meta
          property="og:image"
          content="https://kalmuckroad.org/og_image.jpg"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <div className={cx('eventList', "w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 md:py-12 py-6")}>
        <Link href="/">
          <a className="flex items-center py-2 lg:py-1 w-max xl:text-lg text-tibet-red hover:text-tibet-red-light font-semibold hover:underline mb-6">
            <BackIcon className="w-5 h-5 mr-2" />
            Return back to home
          </a>
        </Link>
        <EventList events={events} title="Upcoming events" />
      </div>
    </div>
  )
}