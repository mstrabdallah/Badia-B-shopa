import { Col, Form, Input, Row, Select, Spin } from 'antd';
import InputS1 from '../../tools/inputs/inputS1';
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { useDispatch, useSelector } from 'react-redux';
import useTranslation from "next-translate/useTranslation"
import MsgApi from '../../tools/msg/msgApi'
import { useEffect } from 'react';
import { getBusinessCategoriesThunk, getSalesVolumesThunk, setCurrent, setFormDataReg } from '../../../store/slices/auth/registerSlice';

const FormRegister = () => {
    const { t } = useTranslation('common')
    const { Option } = Select;

    const { apiErrors, loading, loadingSalesVolumes, businessCategories, salesVolume, loadingBusinessCategories } = useSelector(({ register }) => register)

    const dispatch = useDispatch()

    const onFinish = (values) => {

        dispatch(setFormDataReg({ item: 'password', value: values.password }))
        dispatch(setFormDataReg({ item: 'sales_volume_id', value: values.sales_volume_id }))
        dispatch(setFormDataReg({ item: 'business_category_id', value: values.business_category_id }))
        dispatch(setCurrent(2))
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    useEffect(() => {
        dispatch(getSalesVolumesThunk())
        dispatch(getBusinessCategoriesThunk())
    }, [dispatch])

    return (
        <>

            <Form
                name="basic"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >


                <Row gutter={10}>

                    <Col xs={24}  >
                        <div className="input">
                            <InputS1>
                                <Form.Item

                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: t('required'),
                                        },

                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || value.length > 5) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error(t('Password must contain 6 letters and numbers')));
                                            },
                                        }),
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder={t('password')} />

                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>


                    <Col xs={24}  >
                        <div className="input">
                            <InputS1>
                                <Form.Item

                                    name="passwordConfirmation"


                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: t('required'),
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error(t('The two passwords that you entered do not match!')));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password placeholder={t('password confirmation')} />

                                </Form.Item>
                            </InputS1>
                        </div>
                    </Col>
                    <Col xs={24}>
                        <div className="input">
                            <InputS1>

                                <Form.Item
                                    name="sales_volume_id"
                                    rules={[
                                        {
                                            required: true,
                                            message: t('required'),
                                        }
                                    ]}
                                    validateStatus={apiErrors?.errors?.phone && 'error'}
                                    help={apiErrors?.errors?.phone}
                                    className="handleInputIcon"

                                >

                                    <Select placeholder={t('activity volume')}>
                                        {
                                            salesVolume.map((res) =>
                                                <Option key={res.id} value={res.id}>{res.label}</Option>
                                            )
                                        }
                                    </Select>
                                </Form.Item>
                                {loadingSalesVolumes && <div className='loadingInput'>  <Spin /></div>}

                            </InputS1>
                        </div>
                    </Col>



                    <Col xs={24}>
                        <div className="input">
                            <InputS1>

                                <Form.Item
                                    name="business_category_id"
                                    rules={[
                                        {
                                            required: true,
                                            message: t('required'),
                                        }
                                    ]}
                                    validateStatus={apiErrors?.errors?.phone && 'error'}
                                    help={apiErrors?.errors?.phone}
                                    className="handleInputIcon"

                                >

                                    <Select placeholder={t('Activity type')}>
                                        {
                                            businessCategories.map((res) =>
                                                <Option key={res.id} value={res.id}>{res.name}</Option>
                                            )
                                        }
                                    </Select>
                                </Form.Item>
                                {loadingBusinessCategories && <div className='loadingInput'>  <Spin /></div>}

                            </InputS1>
                        </div>
                    </Col>


                    <Col xs={24}>
                        <div className="ButtonsS1_ flexBetween">


                            <div className='Previous'>
                                <ButtonsS1
                                    onClick={() => dispatch(setCurrent(0))}
                                    text={t('Previous')}
                                />
                            </div>

                            <ButtonsS1 loading={loading} type={'submit'} text={'التالي'} />


                        </div>
                    </Col>

                    <Col xs={24} lg={24} >
                        <MsgApi apiErrors={apiErrors} />
                    </Col>


                </Row>
            </Form>

        </>
    );
};

export default FormRegister;