import { Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
export default function ServicesSupportYourSiteSection() {
    const { t, lang } = useTranslation('common')

    const data = [
        {
            title: 'Ultra-protective',
            des: 'The successful job applicant must have personal and scientific skills in order to ensure his acceptance of the job he is applying for.',
            icon: '/icons/services/iconS1.png'
        },
        {
            title: 'loud services',
            des: 'The successful job applicant must have personal and scientific skills in order to ensure his acceptance of the job he is applying for.',
            icon: '/icons/services/iconS2.png'
        },
        {
            title: 'Easy to edit and customize',
            des: 'The successful job applicant must have personal and scientific skills in order to ensure his acceptance of the job he is applying for.',
            icon: '/icons/services/iconS3.png'
        },
        {
            title: 'Business Statistics',
            des: 'The successful job applicant must have personal and scientific skills in order to ensure his acceptance of the job he is applying for.',
            icon: '/icons/services/iconS4.png'
        },
        {
            title: 'Message notifications',
            des: 'The successful job applicant must have personal and scientific skills in order to ensure his acceptance of the job he is applying for.',
            icon: '/icons/services/iconS5.png'
        },
        {
            title: 'Inventory Management',
            des: 'The successful job applicant must have personal and scientific skills in order to ensure his acceptance of the job he is applying for.',
            icon: '/icons/services/iconS6.png'
        }
    ]
    return (
        <>
            <section className="ServicesSupport">
                <div className="container_">

                    <div className="sectionsHeader">
                        <h2>
                            {t('Services to fully support your site')}
                        </h2>

                        <p>
                           {t('We offer you the best services to improve and update your website.')}
                        </p>

                    </div>

                    <div className="content">
                        <Row gutter={50}>
                            {
                                data.map((res, i) =>
                                    <Col xs={24} md={12} lg={8} key={i}>
                                        <div className="ServicesItem">
                                            <div className="image_">
                                                <Image src={res.icon} alt="Picture of the author" layout="fill" />
                                            </div>
                                            <h3>{t(res.title)}</h3>
                                            <p>{t(res.des)}</p>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </div>

                    <Link href={'#'}>
                        <a>
                            <ButtonsS1 text={t('Build your site now')} />
                        </a>
                    </Link>
                </div>
            </section>
        </>


    )
}
