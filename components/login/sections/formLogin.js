import { Col, Form, Input, Row } from 'antd'
import { useCookies } from 'react-cookie'
import InputS1 from '../../tools/inputs/inputS1'
import ButtonsS1 from '../../tools/buttons/buttonsS1'
import { useDispatch, useSelector } from 'react-redux'
import useTranslation from 'next-translate/useTranslation'
import MsgApi from '../../tools/msg/msgApi'
import { MdAlternateEmail } from 'react-icons/md'
import {
  loginThunk,
  setIsModalVisibleLogin
} from '../../../store/slices/auth/loginSlice'
import allUrl from '@settings/allUrl.json'
import {
  setCheckEmailMessage,
  setCurrent,
  setIsModalVisibleForget
} from '@store/slices/auth/forgetPasswordSlice'

const FormLogin = () => {
  const { t } = useTranslation('common')

  const { apiErrors, loading } = useSelector(({ login }) => login)

  const [_, setCookie] = useCookies()

  const dispatch = useDispatch()
  const onFinish = values => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(res => {
        setCookie('BToken', res.data?.token, {
          domain: allUrl.setCookieDomain,
          path: '/',
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17)
        })
        setCookie('BUser', JSON.stringify(res.data?.user), {
          domain: allUrl.setCookieDomain,
          path: '/',
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17)
        })
        setCookie('BUserDomain', res.data?.domain, {
          domain: allUrl.setCookieDomain,
          path: '/',
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17)
        })

        // setCookie('BToken', res.data?.token, { domain: 'bshopa.com', path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });
        // setCookie('BUser', res.data?.user, { domain: 'bshopa.com', path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });

        window.location.href = allUrl.dashboard
      })
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const handelForgetPasswordBtn = () => {
    dispatch(setIsModalVisibleLogin(false))
    dispatch(setIsModalVisibleForget(true))
    dispatch(setCheckEmailMessage(false))
    dispatch(setCurrent(1))
  }

  return (
    <>
      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row gutter={10}>
          <Col xs={24}>
            <div className='input'>
              <InputS1>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: t('required')
                    }
                  ]}
                  validateStatus={apiErrors?.errors?.email && 'error'}
                  help={apiErrors?.errors?.email}
                  className='email'
                >
                  <Input
                    prefix={<MdAlternateEmail />}
                    placeholder={t('email')}
                  />
                </Form.Item>
              </InputS1>
            </div>
          </Col>
          <Col xs={24}>
            <div className='input'>
              <InputS1>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: t('required')
                    }
                  ]}
                >
                  <Input.Password placeholder={t('password')} />
                </Form.Item>
              </InputS1>
            </div>
          </Col>
          <Col xs={24}>
            <div className='ButtonsS1_ flexCenter'>
              <ButtonsS1
                loading={loading}
                disabled={loading && true}
                type={'submit'}
                text={t('Login')}
              />
            </div>
          </Col>

          <Col xs={24} lg={24}>
            <MsgApi apiErrors={apiErrors} />
          </Col>

          <div className='forget'>
            <div onClick={handelForgetPasswordBtn}>
              {t('did you forget your password')}
            </div>
          </div>
        </Row>
      </Form>
    </>
  )
}

export default FormLogin
