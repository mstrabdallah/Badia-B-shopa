import style from './style/header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LangDropDown from './sections/langDropdown'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Login from '../../components/login/login'
import Register from '../../components/register/register'
import useTranslation from 'next-translate/useTranslation'
import MenuHeader from './sections/menu'
import { message } from 'antd'
import UserDropdown from './sections/userDropdown'
function HeaderApp () {
  const router = useRouter()
  const { checkUser } = useSelector(({ auth }) => auth)

  const { t } = useTranslation('common')
  const [scroll, setScroll] = useState(false)

  const [step, setStep] = useState(1)
  const test = () => {
    setStep(step + 1)
    if (step === 1)
      message.warning(
        t('Not available at the moment, we are working on it soon')
      )
    else if (step === 2)
      message.warning(
        t(
          'Wahd Allah, I mean, come on, if it is available, I will hide it from you. Why?'
        )
      )
    else
      message.warning(
        t('Not available at the moment, we are working on it soon')
      )
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10)
    })
  })
  return (
    <>
      <header className={style.headerPages}>
        <div className={`container_` + (scroll ? ' headerS2' : '')}>
          <div className='header_center flexBetween'>
            <div className='header_sec1 flexBetween'>
              <MenuHeader />
              <div className='logo'>
                <Link prefetch={false} href='/'>
                  <a>
                    <Image
                      alt='logo'
                      src={'/images/logo.svg'}
                      width={158}
                      height={54}
                    />
                  </a>
                </Link>
              </div>

              <ul className='flexBetween header_sec2'>
                <li
                  onClick={test}
                  className={router.pathname === '/test' ? 'active' : ''}
                >
                  <Link prefetch={false} scroll={false} href='#'>
                    <a> {t('Platform experience')}</a>
                  </Link>
                </li>

                <li className={router.pathname === '/packages' ? 'active' : ''}>
                  <Link prefetch={false} href='/packages'>
                    <a>{t('Packages')}</a>
                  </Link>
                </li>

                <li
                  className={router.pathname === '/contact-us' ? 'active' : ''}
                >
                  <Link prefetch={false} href='/contact-us'>
                    <a>{t('call us')}</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className='flexAlignCenter header_sec3'>
              {!checkUser ? (
                <div className='nouser flex'>
                  <Login />
                  <Register />
                </div>
              ) : (
                <div className='user flex'>
                  <UserDropdown />
                </div>
              )}

              <LangDropDown />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderApp
