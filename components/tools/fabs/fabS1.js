import { BsFillChatFill } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import style from './styles/fabs.module.scss'
import FormEmail from './sections/formEmail'
import { message } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import { setResData } from '../../../store/slices/contactUs/fabsSlice';
import { useDispatch } from 'react-redux';
export default function FabS1() {

    const { t } = useTranslation('common')
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
    const [typeItems, setTypeItems] = useState('no')

    const dispatch = useDispatch()
    const setOpen_ = () => {
        setOpen(!open)
        setTimeout(() => {
            setTypeItems('no')
            dispatch(setResData())
        }, 1000);

    }

    useEffect(() => {
        typeof window !== "undefined" && setShow(true)
    }, [])

    const warning = () => {
        message.warning(t('This option is not currently available, we are working on providing it soon'));
    };

    return (

        <div className={style.fabsS1}  >

            <div className='fabs'>
                <div className='iconParent' onClick={() => setOpen_(!open)}>
                    {!open ? <BsFillChatFill /> : <AiOutlineClose />}
                </div>

                <div className={open ? 'fabsOpen' : 'fabsClose'}>
                    {
                        typeItems === 'no' ?
                            <div className='fabsParent'>
                                <div className='fabsS1Header'>
                                    <h3>{t('Welcome')}</h3>
                                    <p>{t('Please choose from the list your preferred method of communication')}</p>
                                </div>

                                <div className='fabsS1Content'>
                                    <div className='typeItems'>
                                        <ul>
                                            <li onClick={() => warning()}>
                                                <span>
                                                    {t('live chat ....')}
                                                </span>
                                            </li>
                                            <li onClick={() => setTypeItems('email')}>{t('Email message...')}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            :
                            typeItems === 'email' ?
                                <div className='fabsParent'>
                                    <div className='fabsS1Header'>
                                        <h3>{t('Send an email')}</h3>
                                        <p>{t('Welcome! Please email us if you have questions, or give an idea of what you are looking for.')}</p>
                                    </div>

                                    <div className='fabsS1Content'>

                                        <FormEmail />

                                    </div>

                                </div>
                                :
                                ''
                    }
                </div>
            </div>
        </div >
    )
} 