import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export default function DownAppMobile() {
    const { t, lang } = useTranslation('common')

    return (
        <>
            <section className="DownAppMobile">
                <div className="container_">

                    <div className="content">

                        <div className="secImg">
                            <div className="image_" >
                                {
                                    lang === 'ar' ?
                                        <Image alt="mobile" src={'/images/mobile.png'} width={948} height={713} />
                                        :
                                        <Image alt="mobile" src={'/images/mobileEn.png'} width={948} height={713} />
                                }


                            </div>
                        </div>


                        <div className="secImgForMobile">
                            <div className="image_" >
                                {
                                    lang === 'ar' ?
                                        <Image alt="mobile" src={'/images/mobile2.png'} width={500} height={220} />
                                        :
                                        <Image alt="mobile" src={'/images/mobile2En.png'} width={500} height={220} />
                                }


                            </div>
                        </div>
                        <div className="secText">


                            <div className="image_" >
                                <Image alt="mobile" src={'/images/AppStore.png'} height={62} width={196} />
                            </div>


                            <div className="image_" >
                                <Image alt="mobile" src={'/images/PlayStore.png'} height={62} width={196} />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>


    )
}


