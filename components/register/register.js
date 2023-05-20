import { Col, Modal, Row } from 'antd'
import React, { useState } from 'react'
import ButtonsS2 from '../tools/buttons/buttonsS2'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import RegisterSteps from './sections/RegisterSteps'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setIsModalVisibleReg } from '../../store/slices/auth/registerSlice'
const Register = () => {
  const { isModalVisibleReg } = useSelector(({ register }) => register)
  const { t } = useTranslation('common')
  const { loading } = useSelector(({ register }) => register)

  const dispatch = useDispatch()
  const showModal = () => {
    dispatch(setCurrent(0))
    dispatch(setIsModalVisibleReg(true))
  }

  const handleCancel = () => {
    dispatch(setIsModalVisibleReg(false))
  }


  return (
    <>
      <section>
        <div onClick={showModal}>
          <ButtonsS2 text={t('Register')} />
        </div>
        <Modal
          title={false}
          footer={false}
          className='modalRegister'
          visible={isModalVisibleReg}
          onCancel={handleCancel}
        >

          {
            !loading ?

              <div className='modalS1_content'>
                <Row>
                  <Col xs={24} md={8}>
                    <div className='modalS1_Des'>
                      <div className='desHeader'>
                        <h2>{t('Create a new account')}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: t(
                              'In order to be able to create a website on b-shopa<br />please fill in the following information'
                            )
                          }}
                        ></p>
                      </div>
                      <div className='image_'>
                        <Image
                          alt='register'
                          src='/images/register/staticImage1.png'
                          width={'168'}
                          height={'220'}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col xs={24} md={16}>
                    <div className='modalS1_form'>
                      <div className='modalS1_header'></div>
                      <div className='modalS1_content2'>
                        <RegisterSteps />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              :
              <div className='sectionLoading'>
                <span className={`loaderReg `}></span>
                <h2>{t('Your store is being created')}</h2>
              </div>
          }
        </Modal>
      </section>
    </>
  )
}

export default Register
