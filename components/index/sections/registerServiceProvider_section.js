import { Col, Row, Tabs } from "antd";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
export default function RegisterServiceProvider() {
    const { t, lang } = useTranslation('common')

    const data = [

    ]
    return (
        <>
            <section className="RegisterServiceProvider pageMin">
                <div className="container_">

                    <div className="sectionsHeader">
                        <h2 dangerouslySetInnerHTML={{ __html: t('To register <span>as a service provider</span>') }} />
                        <p>{t('We have a range of services in front of you, you can register in any of them.')}</p>
                    </div>

                    <div className="content">

                        <Row gutter={40}>
                            <Col xs={24} lg={8}>
                                <div className="RegisterSPItem">
                                    <div className="flexCenter">
                                        <div className="image_ flexCenter">
                                            <Image alt="icons" src={'/icons/RegisterServiceProvider/Archive.png'} width={28} height={28} />
                                        </div>
                                        <h3>{t('Shipping and delivery')}</h3>
                                    </div>

                                    <div className="des">{t('An example to describe what is here .. an example to describe what is here .. an example to describe what is here .. an example to describe what is here.')}</div>
                                    <Link prefetch={false} href="/register-service-provider">
                                        <a>
                                            <ButtonsS1 text={t('Register as a service provider')} />
                                        </a>
                                    </Link>
                                </div>
                            </Col>

                            <Col xs={24} lg={8}>
                                <div className="RegisterSPItem">
                                    <div className="flexCenter">
                                        <div className="image_ flexCenter">
                                            <Image alt="icons" src={'/icons/RegisterServiceProvider/Camera.png'} width={28} height={28} />
                                        </div>
                                        <h3>{t('Photography and design')}</h3>
                                    </div>

                                    <div className="des">{t('An example to describe what is here .. an example to describe what is here .. an example to describe what is here .. an example to describe what is here.')}</div>

                                    <Link prefetch={false} href="/register-service-provider">
                                        <a>
                                            <ButtonsS1 text={t('Register as a service provider')} />
                                        </a>
                                    </Link>
                                </div>
                            </Col>

                            <Col xs={24} lg={8}>
                                <div className="RegisterSPItem">
                                    <div className="flexCenter">
                                        <div className="image_ flexCenter">
                                            <Image alt="icons" src={'/icons/RegisterServiceProvider/Gift.png'} width={28} height={28} />
                                        </div>
                                        <h3>{t('Packaging and processing')}</h3>
                                    </div>

                                    <div className="des">{t('An example to describe what is here .. an example to describe what is here .. an example to describe what is here .. an example to describe what is here.')}</div>
                                    <Link prefetch={false} href="/register-service-provider">
                                        <a>
                                            <ButtonsS1 text={t('Register as a service provider')} />
                                        </a>
                                    </Link>
                                </div>
                            </Col>


                            <Col xs={24} lg={8}>
                                <div className="RegisterSPItem">
                                    <div className="flexCenter">
                                        <div className="image_ flexCenter">
                                            <Image alt="icons" src={'/icons/RegisterServiceProvider/VideoCamera.png'} width={28} height={28} />
                                        </div>
                                        <h3>{t('Video processing')}</h3>
                                    </div>

                                    <div className="des">{t('An example to describe what is here .. an example to describe what is here .. an example to describe what is here .. an example to describe what is here.')}</div>
                                    <Link prefetch={false} href="/register-service-provider">
                                        <a>
                                            <ButtonsS1 text={t('Register as a service provider')} />
                                        </a>
                                    </Link>
                                </div>
                            </Col>


                            <Col xs={24} lg={8}>
                                <div className="RegisterSPItem">
                                    <div className="flexCenter">
                                        <div className="image_ flexCenter">
                                            <Image alt="icons" src={'/icons/RegisterServiceProvider/Swap.png'} width={28} height={28} />
                                        </div>
                                        <h3>{t('E-Marketing')}</h3>
                                    </div>

                                    <div className="des">{t('An example to describe what is here .. an example to describe what is here .. an example to describe what is here .. an example to describe what is here.')}</div>
                                    <Link prefetch={false} href="/register-service-provider">
                                        <a>
                                            <ButtonsS1 text={t('Register as a service provider')} />
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                        </Row>

                    </div>

                </div>
            </section>
        </>


    )
}
