import { Col, Row, Tabs } from "antd";
import useTranslation from "next-translate/useTranslation";
import WhatDoTheySayAboutUs_section from '../swiper/whatDoTheySayAboutUs_swiper'
export default function WhatDoTheySayAboutUsSectios() {
    const { t } = useTranslation('common')

    return (
        <>
            <section className="WhatDoTheySayAboutUs pageMin">
                <div className="container_">

                    <div className="sectionsHeader">
                        <h2 dangerouslySetInnerHTML={{__html:t('What do they say about <span>B-Shopa</span>')}} /> 

                        <p>
                            {t('These are some of the opinions of customers who have dealt with B-shopa.')}
                        </p>

                    </div>

                    <div className="content">


                        <WhatDoTheySayAboutUs_section />



                    </div>

                </div>
            </section>
        </>


    )
}
