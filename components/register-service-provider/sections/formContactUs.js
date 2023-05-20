import { Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import InputS1 from '../../tools/inputs/inputS1';
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { useSelector } from 'react-redux';
import useTranslation from "next-translate/useTranslation"
import MsgApi from '../../tools/msg/msgApi'
import en from 'world_countries_lists/data/countries/en/world.json';
import  {CountryPhoneInput, ConfigProvider } from 'antd-country-phone-input';

const FormContactUs = () => {
    const { t } = useTranslation('common')

    const { apiErrors, loading } = useSelector(({ login }) => login)

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


                <Row gutter={30}>
                    <Col xs={12}>
                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        }
                                    ]}
                                    validateStatus={apiErrors?.errors?.email && 'error'}
                                    help={apiErrors?.errors?.email}
                                    className="email"
                                >
                                    <Input placeholder="الاسم الأول  ......" />
                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>


                    <Col xs={12}>
                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    name="lastName"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        }
                                    ]}
                                    validateStatus={apiErrors?.errors?.email && 'error'}
                                    help={apiErrors?.errors?.email}
                                    className="email"
                                >
                                    <Input placeholder="الاسم الأخير  ......" />
                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div className="input">
                            <InputS1>
                                <Form.Item
                                    name=""
                                    rules={[
                                        {
                                            required: true,
                                            message: 'هذا الحقل مطلوب.',
                                        }
                                    ]}
                                    validateStatus={apiErrors?.errors?.email && 'error'}
                                    help={apiErrors?.errors?.email}
                                    className="email"
                                >
                                    <Input placeholder="عنوان البريد الالكتروني  ......" />
                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div className="input">
                            <InputS1>
                                <ConfigProvider locale={en}>
                                    <Form.Item
                                        name="phone"
                                        initialValue={{
                                            short: 'eg',
                                        }}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'هذا الحقل مطلوب.',
                                            }
                                        ]}
                                        validateStatus={apiErrors?.errors?.phone && 'error'}
                                        help={t(apiErrors?.errors?.phone)}
                                        className="handleInputIcon"

                                    >
                                        <CountryPhoneInput placeholder='رقم الجوال' />
                                    </Form.Item>
                                </ConfigProvider>
                            </InputS1>
                        </div>
                    </Col>

                    <Col xs={24} lg={24} >
                        <MsgApi apiErrors={apiErrors} />
                    </Col>

                    <div className='btnSend'>
                        <ButtonsS1 text={'سجل الآن كمزود خدمة'} type={'submit'} />
                    </div>
                </Row>
            </Form>

        </>
    );
};

export default FormContactUs;