import { Button, Col, Form, Input, Modal, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import InputS1 from '../../tools/inputs/inputS1';
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from "next-translate/useTranslation"
import MsgApi from '../../tools/msg/msgApi'
import { BiHash } from 'react-icons/bi'
import { checkIdentifierCodeThunk, registerThunk, setCurrent, setExistsCode, setFormDataReg } from '../../../store/slices/auth/registerSlice';
import allUrl from '@settings/allUrl.json'
import { AiOutlineDelete } from 'react-icons/ai';
const FormRegister = () => {
    const { t } = useTranslation('common')
    const [form] = Form.useForm();

    const { apiErrors, loading, formDataReg, existsCodeLoading, existsCode } = useSelector(({ register }) => register)
    const [_, setCookie] = useCookies()

    const dispatch = useDispatch()

    const [invitationCode, setInvitationCode] = useState('')
    const check_identifier_code_delete = () => {
        form.setFieldsValue({ coupon_id: '', });
        setInvitationCode('')
        dispatch(setExistsCode(true))
    }
    const setInvitationCodeFunction = e => {
        setInvitationCode(e)
        e === "" && dispatch(setExistsCode(true))
    }
    const check_identifier_code = () => {
        dispatch(checkIdentifierCodeThunk(invitationCode))
    }
    const onFinish = (values) => {
        dispatch(setFormDataReg({ item: 'coupon_id', value: values.coupon_id }))

        dispatch(registerThunk(formDataReg)).unwrap().then((res) => {
            setCookie('BToken', res.data?.token, { domain: allUrl.setCookieDomain, path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
            setCookie('BUser', JSON.stringify(res.data?.user), { domain: allUrl.setCookieDomain, path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
            setCookie('BUserDomain', res.data?.domain, { domain: allUrl.setCookieDomain, path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });


            window.location.href = allUrl.dashboard
            // console.log('res', res.data)

        }).catch((error) => {

            console.log(error)
        })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='step3'>
            <div className={`form`}>
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                >
                    <div className='coupon_sec'>
                        <p>- {t('If someone invites you, ask them for the invitation code')}</p>
                        <p>- {t('Then enter the code here')}</p>
                        <Row gutter={10}>

                            <Col xs={24} md={16}>
                                <div className="input">
                                    <InputS1>
                                        <Form.Item
                                            onChange={(e) => setInvitationCodeFunction(e.target.value)}
                                            name="coupon_id"
                                            className="handleInputIcon"
                                            validateStatus={!existsCode && 'error'}
                                            help={!existsCode && <div className='flex'>{t('This code is invalid')} <div className='check_identifier_code_delete' onClick={() => check_identifier_code_delete()}><AiOutlineDelete /> {t('delete code')}</div></div>}
                                        >
                                            <Input prefix={<BiHash />} placeholder={t('invitation code')} />
                                        </Form.Item>
                                    </InputS1>

                                </div>
                            </Col>
                            <Col xs={24} md={8}>
                                <div className="ButtonsS1_">
                                    <Button className={invitationCode != '' && 'active'} loading={existsCodeLoading} onClick={() => check_identifier_code()}> {t('Check the code')}</Button>
                                </div>
                            </Col>
                        </Row>

                    </div>

                    <Row gutter={10}>

                        <Col xs={24}>
                            <div className="ButtonsS1_ flexBetween">
                                <div className='Previous'>
                                    <ButtonsS1
                                        onClick={() => dispatch(setCurrent(1))}
                                        text={t('Previous')}
                                    />
                                </div>


                                <ButtonsS1 loading={loading} disabled={loading || existsCodeLoading || !existsCode || (existsCode && invitationCode != '')} type={'submit'} text={t('Create my account')} />

                            </div>
                        </Col>

                        <Col xs={24} lg={24} >
                            <MsgApi apiErrors={apiErrors} msg={true} />
                        </Col>


                    </Row>
                </Form>
            </div>


        </div>
    );
};

export default FormRegister;