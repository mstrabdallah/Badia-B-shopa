// import style from './styles/login.module.scss'
import { Col, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import ButtonsS2 from '../tools/buttons/buttonsS2'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import useTranslation from 'next-translate/useTranslation'
import FormLogin from './sections/formLogin'
import { setIsModalVisibleLogin } from '@store/slices/auth/loginSlice'
import { setIsModalVisibleForget } from '@store/slices/auth/forgetPasswordSlice'
import { ForgetPassword } from '@components/forget-password/forgetPassword'
import { useRouter } from 'next/router'

const Login = () => {
  const dispatch = useDispatch()
  const { t, lang } = useTranslation('common')

  const { apiErrors, loading, isModalVisibleLogin } = useSelector(
    ({ login }) => login
  )

  const [_, setCookie] = useCookies()

  const showModal = () => {
    dispatch(setIsModalVisibleLogin(true))
    dispatch(setIsModalVisibleForget(false))
  }

  const handleOk = () => {
    dispatch(setIsModalVisibleLogin(false))
  }

  const handleCancel = () => {
    dispatch(setIsModalVisibleLogin(false))
  }

  const router = useRouter()
  useEffect(() => {
    router.query?.login === "1" && dispatch(setIsModalVisibleLogin(true))
  }, [dispatch])

  return (
    <>
      <section>
        <div onClick={showModal}>
          <ButtonsS2 text={t('Login')} className={'noBg'} />
        </div>
        <Modal
          title={false}
          footer={false}
          className='modalLogin'
          visible={isModalVisibleLogin}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className='modalS1_content'>
            <Row>
              <Col xs={24} md={10}>
                <div className='modalS1_form'>
                  <div className='modalS1_header'>
                    <h2>{t('Login')}</h2>
                    <p>
                      {t('Please Login To Continue Your Work In Your Store.')}
                    </p>
                  </div>

                  <FormLogin />
                </div>
              </Col>

              <Col xs={24} md={14}>
                <div className='modalS1_Des'>
                  {lang === 'ar' ? (
                    <Image
                      alt='login'
                      src='/images/login/slide1.png'
                      width={'333'}
                      height={'333'}
                    />
                  ) : (
                    <Image
                      alt='login'
                      src='/images/login/slide1en.png'
                      width={'333'}
                      height={'333'}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Modal>
        <ForgetPassword />
      </section>
    </>
  )
}

export default Login
