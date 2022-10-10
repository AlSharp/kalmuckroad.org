import styles from 'styles/home.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';
import { Autoplay, EffectFade, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

import EventCard from 'components/Cards/EventCard';

export default function Home() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('page')}>
      <Head>
        <title>Kalmyk-Mongolian Buddhist Center</title>
        <meta
          name="description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ)"
          key="desc"
        />
        <meta property="og:title" content="Kalmyk-Mongolian Buddhist Center" />
        <meta
          property="og:description"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ)"
        />
        <meta
          property="og:image"
          content="https://kalmuckroad.org/og_image.jpg"
        />
        <meta
          name="twitter:card"
          content="Buddhist temple serving the Kalmyk community (Howell, NJ)"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <Swiper
        className={cx('photoSlider', 'h-40 sm:h-52 md:h-[400px] w-full xl:max-w-6xl mx-auto')}
        modules={[EffectFade, Autoplay, Scrollbar]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        effect="fade"
        scrollbar={{ draggable: true }}
      >
        {
          Array.from({ length: 8 }, (_, k) => (
            <SwiperSlide key={k + 1}>
              <Image fill style={{ objectFit: 'cover' }} src={`/Bouyin_R_${k + 1}.JPG`} alt={`Slide ${k + 1}`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className={cx('welcomeSection', 'bg-kalmyk-blue px-6 md:py-12 py-6')}>
        <div className="flex flex-col lg:flex-row w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <div className="lg:mr-8">
            <h1 className="text-3xl !leading-tight md:text-4xl lg:text-5xl text-txt-on-kalmyk-blue font-nunito-sans font-extrabold mb-8">
              Welcome to Tashi Lhunpo Buddhist Temple
            </h1>
            <div className="flex mb-8 items-center">
              <Link href="/about">
                <a className="underline hover:no-underline text-white">Learn more about Tashi Lhumpo Buddhist Temple</a>
              </Link>
              <span className="border rounded-full w-4 h-4 ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full fill-white">
                  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            <div className="mb-8">
              <button className="bg-kalmyk-yellow hover:bg-yellow-500 text-txt-dark font-bold py-2 px-4 rounded mr-4">
                Become a member
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
                Donate
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="rounded-xl"
              width={936}
              height={755}
              src="/kalmyk_temple.png"
              alt="Kalmuck Road Buddhist Temple Image"
            />
          </div>
        </div>
      </div>
      <div className={cx('homePageContent', 'px-6 md:py-12 py-6')}>
        <div className="upcoming-services w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl text-txt-dark font-nunito-sans font-extrabold uppercase text-center mb-10">
            Upcoming holiday services
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-6/12">
              <EventCard
                className="bg-white rounded-lg shadow-lg lg:mr-4 mb-8"
                descClassName="h-48 mb-4 text-clip overflow-hidden ..."
                eventName="Gal Thalgen"
                day="Saturday, November 12, 2022"
                time="1:00 PM"
                eventDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Velit laoreet id donec ultrices tincidunt arcu non. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam. Id cursus metus aliquam eleifend mi in. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Tincidunt eget nullam non nisi est. Eros in cursus turpis massa tincidunt dui ut. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Egestas congue quisque egestas diam in arcu. Suscipit tellus mauris a diam. Ornare lectus sit amet est placerat in egestas. Dui vivamus arcu felis bibendum ut tristique et. Urna molestie at elementum eu facilisis sed odio morbi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim."
                eventURL="https://google.com"
                imgSrc="/tsagan_sar_img.jpg"
              />
            </div>
            <div className="w-full lg:w-6/12">
              <EventCard
                className="bg-white rounded-lg shadow-lg lg:ml-4 mb-8"
                descClassName="h-48 mb-4 text-clip overflow-hidden ..."
                eventName="Zul"
                day="Sunday, December 18, 2022"
                time="6:00 PM"
                eventDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Velit laoreet id donec ultrices tincidunt arcu non. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam. Id cursus metus aliquam eleifend mi in. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Tincidunt eget nullam non nisi est. Eros in cursus turpis massa tincidunt dui ut. Sapien nec sagittis aliquam malesuada bibendum arcu vitae."
                eventURL="https://google.com"
                imgSrc="/zul.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-6/12">
              <EventCard
                className="bg-white rounded-lg shadow-lg lg:mr-4 mb-8"
                descClassName="h-48 mb-4 text-clip overflow-hidden ..."
                eventName="Tsagan Eve"
                day="Monday, February 20, 2023"
                time="6:00 PM"
                eventDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Velit laoreet id donec ultrices tincidunt arcu non. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Nibh ipsum consequat nisl vel pretium lectus quam. Id cursus metus aliquam eleifend mi in."
                eventURL="https://google.com"
                imgSrc="/tsagan_sar_img.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
