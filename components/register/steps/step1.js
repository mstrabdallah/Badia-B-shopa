import { Cascader, Col, Form, Input, message, Modal, Row, Spin } from 'antd';
import InputS1 from '../../tools/inputs/inputS1';
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from "next-translate/useTranslation"
import MsgApi from '../../tools/msg/msgApi'
import { FiHome } from 'react-icons/fi'
import { MdAlternateEmail, MdLanguage } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import en from 'world_countries_lists/data/countries/en/world.json';
import { CountryPhoneInput, ConfigProvider } from 'antd-country-phone-input';
import { checkDomainThunk, checkEmailThunk, setCurrent, setFormDataReg } from '../../../store/slices/auth/registerSlice';
import { useState } from 'react';

const FormRegister = () => {
    const { t } = useTranslation('common')

    const { apiErrors, existsDomainLoading, existsDomain, loadingCheckEmail } = useSelector(({ register }) => register)
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [emailapi, setEmailapi] = useState()

    const dispatch = useDispatch()
    const onFinish = (values) => {

        if (phone === undefined) {
            message.error(t('Phone number must be entered'));
            return 0;
        }

        if (existsDomain === true) return 0


        dispatch(checkEmailThunk(email)).unwrap().then((res) => {
            dispatch(setFormDataReg({ item: 'store_name', value: values.store_name }))
            dispatch(setFormDataReg({ item: 'name', value: values.name }))
            dispatch(setFormDataReg({ item: 'domain', value: values.domain + '.bshopa.com' }))
            dispatch(setFormDataReg({ item: 'email', value: values.email }))
            dispatch(setFormDataReg({ item: 'mobile', value: values.mobile.phone }))
            dispatch(setCurrent(1))

        }).catch((error) => {

            setEmailapi(error?.errors?.email)
        })



    };
    const onFinishFailed = (errorInfo) => {

    };

    const setDomainValue = (e) => {
        dispatch(checkDomainThunk(e.target.value + '.bshopa.com'))
        console.log(e.target.value)
    }

    const setEmailValue = (e) => {
        setEmail(e.target.value)
    }




    return (
        <>
            <div className='step1'>
                <ConfigProvider locale={en}
                    // select countries
                    areaFilter={(area) => area.name === 'Saudi Arabia' || area.name === 'Egypt'}

                >
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

                                            name="store_name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: t('required'),
                                                }
                                            ]}
                                            validateStatus={apiErrors?.errors?.store_name && 'error'}
                                            help={apiErrors?.errors?.store_name}
                                            className="handleInputIcon"
                                        >
                                            <Input prefix={<FiHome />} placeholder={t('Store Name')} />
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>

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
                                            className="handleInputIcon"
                                        >
                                            <Input prefix={<FiUser />} placeholder={t('Merchant name')} />
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>

                            <Col xs={24}>
                                <div className="input domainP">
                                    <InputS1>
                                        <div className='domain'>
                                            <Form.Item

                                                name="domain"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: t('required'),
                                                    }
                                                ]}
                                                validateStatus={existsDomain === true && 'error'}
                                                help={existsDomain === true && t('This domain name is not available')}
                                                className="handleInputIcon"



                                            >

                                                <Input onChange={(e) => setDomainValue(e)} addonAfter={".bshopa.com"} prefix={<MdLanguage />} placeholder={t('domain')} />

                                            </Form.Item>
                                        </div>
                                        {existsDomainLoading && <div className='loadingInput'>  <Spin /></div>}
                                    </InputS1>
                                </div>
                            </Col>


                            <Col xs={24}>
                                <div className="input">
                                    <InputS1>

                                        <Form.Item
                                            name="mobile"

                                            rules={[
                                                {
                                                    required: true,
                                                    message: t('required'),
                                                }
                                            ]}

                                            initialValue={{
                                                short: 'sa',
                                            }}

                                            validateStatus={apiErrors?.errors?.mobile && 'error'}
                                            help={apiErrors?.errors?.mobile}
                                            className="handleInputIcon"

                                        >
                                            <CountryPhoneInput

                                                onChange={(e) => setPhone(e.phone)} placeholder={t('Mobile number')} />
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
                                            validateStatus={emailapi && 'error'}
                                            help={emailapi}
                                            className="handleInputIcon"
                                        >
                                            <Input prefix={<MdAlternateEmail />} onChange={(e) => setEmailValue(e)} placeholder={t('E-mail address')} />
                                        </Form.Item>
                                    </InputS1>
                                </div>
                            </Col>


                            <Col xs={24}>
                                <div className="ButtonsS1_ flexEnd">

                                    <ButtonsS1
                                        loading={loadingCheckEmail}
                                        disabled={loadingCheckEmail || existsDomainLoading}
                                        type={'submit'} text={t('next')} />

                                </div>

                            </Col>

                            <Col xs={24} lg={24} >
                                <MsgApi apiErrors={apiErrors} />
                            </Col>

                        </Row>
                    </Form>
                </ConfigProvider>
            </div>
        </>
    );
};

export default FormRegister;