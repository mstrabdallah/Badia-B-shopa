import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";
import style from "../styles/SitesOnThePlatform_swiper.module.scss";
import { Rate } from "antd";
export default function SitesOnThePlatformSwiper() {
  return (

    <Swiper


      pagination={{
        el: '.swiper-pagination',
        clickable: true,

      }}

      breakpoints={{
        640: {
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

        <div className="opinionItem">
          <div className="image_">
            <Image alt="opinion"  src={'/photos/users/user1.png'} width={70} height={70} />
          </div>

          <div className="flexBetween">
            <h3>Robert Fox</h3>
            <Rate disabled defaultValue={5} />
          </div>

          <div className="des">
            ايه الجمال ده كله، شغاااااااااااااااااااااااال وحلو جدًا .. تجربة ممتازة من موقع ممتاز :D
          </div>
        </div>
      </SwiperSlide>


      <SwiperSlide>

        <div className="opinionItem">
          <div className="image_">
            <Image alt="opinion" src={'/photos/users/user2.png'} width={70} height={70} />
          </div>

          <div className="flexBetween">
            <h3>Robert Fox</h3>
            <Rate disabled defaultValue={5} />
          </div>

          <div className="des">
            ايه الجمال ده كله، شغاااااااااااااااااااااااال وحلو جدًا .. تجربة ممتازة من موقع ممتاز :D
          </div>
        </div>
      </SwiperSlide>



      <SwiperSlide>

        <div className="opinionItem">
          <div className="image_">
            <Image alt="opinion" src={'/photos/users/user3.png'} width={70} height={70} />
          </div>

          <div className="flexBetween">
            <h3>Jenny Wilson</h3>
            <Rate disabled defaultValue={5} />
          </div>

          <div className="des">
            ايه الجمال ده كله، شغاااااااااااااااااااااااال وحلو جدًا .. تجربة ممتازة من موقع ممتاز :D
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>

        <div className="opinionItem">
          <div className="image_">
            <Image alt="opinion" src={'/photos/users/user3.png'} width={70} height={70} />
          </div>

          <div className="flexBetween">
            <h3>Jenny Wilson</h3>
            <Rate disabled defaultValue={5} />
          </div>

          <div className="des">
            ايه الجمال ده كله، شغاااااااااااااااااااااااال وحلو جدًا .. تجربة ممتازة من موقع ممتاز :D
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-pagination"></div>

    </Swiper>

  );
}
