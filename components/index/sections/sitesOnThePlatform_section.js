import { Tabs } from "antd";
import useTranslation from "next-translate/useTranslation";
import SitesOnThePlatformSwiper from '../swiper/SitesOnThePlatform_swiper'
const { TabPane } = Tabs;

export default function SitesOnThePlatform() {
    const { t } = useTranslation('common')

    return (
        <>
            <section className="SitesOnThePlatform">
                <div className="container_">

                    <div className="sectionsHeader">
                        <h2>
                            {t('Sites on the platform')}
                        </h2>

                        <p dangerouslySetInnerHTML={{ __html: t('Sites on the platform __des') }}></p>

                    </div>

                    <div className="content">

                        <div className="antdTabS1">
                            <Tabs defaultActiveKey="1" centered>
                                <TabPane tab={t('health and beauty')} key="1">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>
                                <TabPane tab={t('Sports')} key="2">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>
                                <TabPane tab={t('medical')} key="3">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>

                                <TabPane tab={t('grocery')} key="4">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>

                                <TabPane tab={t('health and beauty')} key="5">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>
                                <TabPane tab={t('Sports')} key="6">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>
                                <TabPane tab={t('medical')} key="7">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>

                                <TabPane tab={t('grocery')} key="8">
                                    <SitesOnThePlatformSwiper />
                                </TabPane>



                            </Tabs>
                        </div>
                    </div>

                </div>
            </section>
        </>


    )
}
