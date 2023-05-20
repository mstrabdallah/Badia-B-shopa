import { Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import { BsArrowLeft } from 'react-icons/bs'
export default function DesignsForYourWebsiteSection() {
    const { t } = useTranslation('common')

    return (
        <>
            <section className="designsForYourWebsiteSection">
                <div className="container_">

                    <div className="sectionsHeader">
                        <h2>
                            {t('More than 1000+ designs for your website')}
                        </h2>

                        <p>
                            {t('You can choose the appropriate template for your site .. or ask us and we will choose for you.')}
                        </p>

                    </div>
                    <div className="SwiperS1">
                        <Swiper

                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            // slidesPerView={"auto"}
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
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Navigation]}
                        >

                            <div className="swiper-container">
                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site1.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="websitesItem">
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site3.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site2.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site1.png'} width="300" height="260" />
                                    </div>     </SwiperSlide>

                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site3.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site2.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site1.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site3.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={'websitesItem'}>
                                        <Image alt="websites" src={'/photos/designsForYourWebsite/site2.png'} width="300" height="260" />
                                    </div>
                                </SwiperSlide>
                            </div >

                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </Swiper >
                    </div>

                    <Link href={'#'}>
                        <a>
                            <div className="showAll flexCenter">
                                <BsArrowLeft />
                                <div className="title_">
                                    {t('View all design templates')}
                                </div>

                            </div>
                        </a>
                    </Link>
                </div >
            </section >
        </>


    )
}
