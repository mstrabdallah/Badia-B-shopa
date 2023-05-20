import { Button, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import InputS1 from '../../../tools/inputs/inputS1';
import ButtonsS1 from '../../../tools/buttons/buttonsS1'
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from "next-translate/useTranslation"
import MsgApi from '../../../tools/msg/msgApi'
import { TbSend } from 'react-icons/tb'
import { MdOutlineAttachFile } from 'react-icons/md'
import { fabsContactUsThunk, setResData } from '../../../../store/slices/contactUs/fabsSlice';

const { TextArea } = Input;

const FormContactUs = () => {
    const { t } = useTranslation('common')

    const { apiErrors, loading, resData } = useSelector(({ fabs }) => fabs)


    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(fabsContactUsThunk(values))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const setResDataFun = () => {
        dispatch(setResData())
    }

    return (
        <>

            {
                resData?.status === "success" ?
                    <div className='fabsResMsg'>
                        <div className='fabsCountentUsMsg'>
                            <div>
                                {t('msgContentUS')}
                                <div className='sendAnother' onClick={setResDataFun}>{t('send another message')}</div>
                            </div>
                        </div>
                    </div>
                    :
                    <Form
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <div className='formContent'>

                            <Row gutter={10}>
                                <Col xs={24}>
                                    <div className="input">
                                        <InputS1>
                                            <Form.Item
                                                name="name"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('required'),
                                                    }
                                                ]}
                                                validateStatus={apiErrors?.errors?.name && 'error'}
                                                help={apiErrors?.errors?.name}
                                                className="email"
                                            >
                                                <Input placeholder={t('Your Name ...')} />
                                            </Form.Item>
                                        </InputS1>
                                    </div>
                                </Col>


                                <Col xs={24}>
                                    <div className="input">
                                        <InputS1>
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('required'),
                                                    }
                                                ]}
                                                validateStatus={apiErrors?.errors?.email && 'error'}
                                                help={apiErrors?.errors?.email}
                                                className="email"
                                            >
                                                <Input placeholder={t('E-mail address ...')} />
                                            </Form.Item>
                                        </InputS1>
                                    </div>
                                </Col>

                                <div className='des'>{t('This ensures that you will get our response if you need to leave the chat.')}</div>
                                <Col xs={24}>
                                    <div className="input">
                                        <InputS1>
                                            <Form.Item
                                                name="message"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('required'),
                                                    }
                                                ]}
                                                validateStatus={apiErrors?.errors?.message && 'error'}
                                                help={apiErrors?.errors?.message}
                                                className="email"
                                            >
                                                <TextArea
                                                    placeholder={t('Please write your message...')}
                                                    autoSize={{
                                                        minRows: 6,
                                                        maxRows: 8,
                                                    }}
                                                />
                                            </Form.Item>
                                        </InputS1>
                                    </div>
                                </Col>

                                <Col xs={24} lg={24} >
                                    <MsgApi
                                        apiErrors={apiErrors}

                                    />
                                </Col>


                            </Row>
                        </div>
                        <div className='fabsS1Footer flexEnd'>
                            <Button className='subUpload'><MdOutlineAttachFile /></Button>
                            <ButtonsS1 text={<TbSend />} type={'submit'} loading={loading}
                                disabled={loading} />

                        </div>
                    </Form>
            }
        </>
    );
};

export default FormContactUs;