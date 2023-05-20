import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import useTranslation from "next-translate/useTranslation";
import ButtonsS1 from '../../tools/buttons/buttonsS1'

export default function ConnectWithTeam() {

    const { t } = useTranslation('common')
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <section className="ConnectWithTeam headSectionsWaveS1">
                <div className="container_">
                    <header className="headSections">
                        <h2>{t('To contact the B-shopa team')}</h2>
                        <p>{t('Contact us now by sending a message and we will respond to you within 48 hours.')}</p>
                    </header>

                    <div className="content">
                        <Form
                            name="basic"

                            layout="vertical"

                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Row gutter={10}>


                                <Col xs={24} md={12} lg={8} >
                                    <div className="input">
                                        <Form.Item
                                            label={t('email')}
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t('required'),
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col xs={24} md={12} lg={8} >
                                    <div className="input">
                                        <Form.Item
                                            label={t('your question')}
                                            name="quetion"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t('required'),
                                                },
                                            ]}
                                        >
                                            <TextArea autoSize={{
                                                minRows: 1,
                                                maxRows: 6,
                                            }} />

                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col xs={24} md={24} lg={8} >
                                    <div className="ButtonsS1_ flexCenter">
                                        <ButtonsS1 text={t('send your question')} />
                                    </div>
                                </Col>


                            </Row>
                        </Form>
                    </div>
                </div>
            </section>
        </>


    )
}
