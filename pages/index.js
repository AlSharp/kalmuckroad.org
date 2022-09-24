import styles from 'styles/home.module.scss';
import Head from 'next/head';
import Image from 'next/future/image';
import { Autoplay, EffectFade, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames/bind';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

export default function Home() {
  const cx = classNames.bind(styles);

  return (
    <>
      <Head>
        <title>Kalmuck Road Buddhist Temple</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <Swiper
        className="h-36 md:h-[400px]"
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
      <div className={cx('homeContent', 'bg-kalmyk-blue md:px-12 px-2 md:pt-12 pt-4 pb-12')}>
        <h1 className="text-5xl text-txt-on-kalmyk-blue font-bold text-center uppercase px-6 mb-12">
          Welcome to our sangha
        </h1>
        <div className="upcoming-services my-5">
          <h2 className="text-2xl text-txt-on-kalmyk-blue font-semibold uppercase text-center my-5">
            Upcoming holiday services
          </h2>
          <div className="w-full text-center inline-grid gap-4 grid-cols-1 grid-rows-3 md:grid-cols-3 text-xl text-txt-on-kalmyk-blue font-semibold my-5">
            <span className="text-center">Gal Thalgen</span>
            <span className="text-center">Saturday, November 12, 2022</span>
            <span className="text-center">1:00 PM</span>
            <span className="text-center">Zul</span>
            <span className="text-center">Sunday, December 18, 2022</span>
            <span className="text-center">6:00 PM</span>
            <span className="text-center">Tsagan Eve</span>
            <span className="text-center">Monday, February 20, 2023</span>
            <span className="text-center">6:00 PM</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            width={936}
            height={755}
            src="/kalmyk_temple.png"
            alt="Kalmuck Road Buddhist Temple Image"
          />
        </div>
        <h3 className="text-2xl font-semibold text-txt-on-kalmyk-blue text-center mt-5">
          The website is under active development
        </h3>
      </div>
    </>
  )
}
