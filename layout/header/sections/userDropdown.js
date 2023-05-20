import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import ButtonsS1 from '../../../components/tools/buttons/buttonsS1';
import { RiUser6Line } from 'react-icons/ri'
import { useCookies } from 'react-cookie';

import allUrl from '@settings/allUrl.json'
import useTranslation from 'next-translate/useTranslation';


const UserDropdown = () => {
    const { t, lang } = useTranslation('common');
    const [cookies, setCookie, removeCookie] = useCookies();

    const Logout = () => {
        removeCookie('BToken', { domain: allUrl.setCookieDomain })
        removeCookie('BUser', { domain: allUrl.setCookieDomain })
        removeCookie('BUserDomain', { domain: allUrl.setCookieDomain })

        window.location.href = "/"
    }



    const menu = (
        <Menu
            items={[
                {
                    label: <Link href={allUrl.dashboard + (lang === "ar" ? '' : '/en')}>{t('dashboard')}</Link>,
                    key: '1',
                },
                {
                    label: <div onClick={Logout}>{t('logout')}</div>,
                    key: '2',
                },
            ]}
        />
    );

    return (
        <div className='userMenu'>
            <Dropdown overlay={menu} trigger={['click']} overlayClassName={'menuS1'}>
                <a onClick={(e) => e.preventDefault()}>
                    <ButtonsS1 text={<><RiUser6Line /> {t('my account')}</>} />
                </a>
            </Dropdown>
        </div>
    )
};

export default UserDropdown;