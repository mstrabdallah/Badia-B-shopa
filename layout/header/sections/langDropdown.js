import { Dropdown, Menu } from 'antd';
import { MdLanguage } from 'react-icons/md'
import setLanguage from 'next-translate/setLanguage'
import { useCookies } from 'react-cookie';

const LangDropdown = ({ text, onClose }) => {
    const [cookies, setCookie] = useCookies(['lang']);
    const changeLang = (e) => {
        // setCookie('lang', e, { path: '/', expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 60 * 17) });


        setLanguage(e)
        onClose && onClose()
        // location.reload();

    }

    const menu = (
        <Menu
            items={[
                {
                    onClick: () => changeLang('ar'),
                    label: <div className='langAR'>عربي</div>,
                    key: 'ar',
                },

                {
                    onClick: () => changeLang('en'),
                    label: 'English',
                    key: 'en',
                },
            ]}
        />
    );


    return (
        <div className='langDropdown'>
            <Dropdown overlay={menu} overlayClassName={'DropdownS2'} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <MdLanguage /> {text}
                </a>
            </Dropdown>
        </div>
    )
};

export default LangDropdown;