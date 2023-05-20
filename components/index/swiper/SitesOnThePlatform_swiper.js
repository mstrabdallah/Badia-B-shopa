import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import style from "../styles/SitesOnThePlatform_swiper.module.scss";
export default function SitesOnThePlatformSwiper() {
  return (

    <Swiper


      pagination={{
        el: '.swiper-pagination',
        clickable: true,

      }}

      breakpoints={{
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}

      modules={[Pagination]}
      className={style.SwiperS2}
    >
      <SwiperSlide>
        <div className="item">
          <Image alt="website" src={'/photos/websites/site1.png'} width="360" height="260" />
          <h4>Mr.Mesalaha</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div className="item">
          <Image alt="website" src={'/photos/websites/site3.png'} width="360" height="260" />
          <h4>Mr.Mesalaha</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="item">
          <Image alt="website" src={'/photos/websites/site2.png'} width="360" height="260" />
          <h4>Mr.Mesalaha</h4>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="item">
          <Image alt="website" src={'/photos/websites/site1.png'} width="360" height="260" />
          <h4>Mr.Mesalaha</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <Image alt="website" src={'/photos/websites/site3.png'} width="360" height="260" />

      </SwiperSlide>
      <SwiperSlide>
        <Image alt="website" src={'/photos/websites/site2.png'} width="360" height="260" />

      </SwiperSlide>
      <div className="swiper-pagination"></div>

    </Swiper>

  );
}
