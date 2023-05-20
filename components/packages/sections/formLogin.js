import { Col, Form, Input, Modal, Row } from 'antd';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import InputS1 from '../../tools/inputs/inputS1';
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { useSelector } from 'react-redux';
import useTranslation from "next-translate/useTranslation"
import MsgApi from '../../tools/msg/msgApi'
import Link from 'next/link';
import { MdAlternateEmail } from 'react-icons/md'
const FormLogin = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { t } = useTranslation('common')

    const { apiErrors, loading } = useSelector(({ login }) => login)

    const [_, setCookie] = useCookies()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };



    const onFinish = (values) => {

        dispatch(
            loginThunk(values)).unwrap().then((res) => {
                setCookie('AToken', res.data?.token, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
                setCookie('AUser', res.data?.user, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
                window.location.href = "/dashboard"

            })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>

            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >


                <Row gutter={10}>
                    <Col xs={24}>
                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    label="البريد الالكتروني"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        }
                                    ]}
                                    validateStatus={apiErrors?.errors?.email && 'error'}
                                    help={t(apiErrors?.errors?.email)}
                                    className="email"
                                >
                                    <Input prefix={<MdAlternateEmail />} />
                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>
                    <Col xs={24}  >
                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    label="كلمة السر"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        },
                                    ]}
                                >
                                    <Input.Password />

                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>
                    <Col xs={24}>
                        <div className="ButtonsS1_ flexCenter">
                            <ButtonsS1 loading={loading} type={'submit'} text={'تسجيل الدخول'} />
                        </div>
                    </Col>

                    <Col xs={24} lg={24} >
                        <MsgApi apiErrors={apiErrors} />
                    </Col>

                    <div className='forget'>
                        <Link href={'/##'}>
                            <a >نسيت كلمة المرور ؟</a>
                        </Link>
                    </div>
                </Row>
            </Form>

        </>
    );
};

export default FormLogin;