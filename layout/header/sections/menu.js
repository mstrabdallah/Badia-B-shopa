import { Button, Drawer, message, Radio, Space } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi'
import { useSelector } from 'react-redux';
import ButtonsS1 from '../../../components/tools/buttons/buttonsS1'
import allUrl from '@settings/allUrl.json'
import { useCookies } from 'react-cookie';

import Login from '../../../components/login/login'
import Register from '../../../components/register/register'
import LangDropdown from './langDropdown';


const MenuHeader = () => {

  const { t, lang } = useTranslation('common')
  const [visible, setVisible] = useState(false);
  const { checkUser } = useSelector(({ auth }) => auth);

  const router = useRouter();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };


  const [cookies, setCookie, removeCookie] = useCookies();

  const Logout = () => {
    removeCookie('BToken', { domain: allUrl.setCookieDomain })
    removeCookie('BUser', { domain: allUrl.setCookieDomain })
    removeCookie('BUserDomain', { domain: allUrl.setCookieDomain })

    window.location.href = "/"
  }

  const test = () => {
    message.warning(t('Not available at the moment, we are working on it soon'));
    onClose()
  }


  return (
    <>
      <div className='menuPage'>
        <div className='menuPageBtn' onClick={showDrawer}>
          <HiMenuAlt1 />

        </div>
        <Drawer
          placement={lang === 'en' ? 'left' : 'right'}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={'right'}
          className={'menuPageDrawer'}
        >
          <div className='menuPageHeader flex'>

            <div className='menuPageBtnclose' onClick={onClose}>
              <HiMenuAlt1 />
            </div>

            <div className='logo'>
              <Link prefetch={false} href="/"><a>
                <Image alt="menu logo" src={'/images/logo.svg'} width={158} height={54} />
              </a></Link>
            </div>
          </div>

          <div className='content'>
            <ul>




              <li className={router.pathname === "/#" ? "active" : ""} onClick={test}>
                <Link prefetch={false} href="/#"><a>{t('Platform experience')}</a></Link>
              </li>

              <li className={router.pathname === "/packages" ? "active" : ""} onClick={onClose}>
                <Link prefetch={false} href="/packages"><a>{t('Packages')}</a></Link>
              </li>


              <li className={router.pathname === "/contact-us" ? "active" : ""} onClick={onClose}>
                <Link prefetch={false} href="/contact-us"><a>{t('call us')}</a></Link>
              </li>



            </ul>

            <div className='options'>
              <ul>
                <li>
                  <LangDropdown onClose={onClose} text={<span>{t('language')}</span>} />
                </li>
              </ul>

            </div>
            <div className='myAccount'>
              {
                checkUser ?
                  <ul>

                    <li onClick={onClose}>
                      <Link href={allUrl.dashboard}><a>{t('dashboard')}</a></Link>
                    </li>


                    <li onClick={Logout}>
                      <a>{t('logout')}</a>
                    </li>


                  </ul>
                  :
                  <ul>

                    <li onClick={onClose}>
                      <Login />
                    </li>


                    <li onClick={onClose}>
                      <Register />
                    </li>


                  </ul>



              }

            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MenuHeader;