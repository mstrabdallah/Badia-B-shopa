import { message, Modal } from "antd"
import useTranslation from "next-translate/useTranslation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function MsgHandleApi({ msg }) {
    const { t } = useTranslation('common')
    const { msgHandleApi } = useSelector(({ settings }) => settings)
 
    useEffect(() => {
        // message.error(t('jjjjj'))
    }, [msgHandleApi])
    return (
        msgHandleApi === 404 &&

        <div className="ApiError">


            <Modal title={null} footer={null} visible={true} className={'msgHandleApi'}>
                <div id="error-box">
                    <div className="dot"></div>
                    <div className="dot two"></div>
                    <div className="face2">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth sad"></div>
                    </div>
                    <div className="shadow move"></div>
                    <div className="message"><h1 className="alert">Error!</h1><p>oh no, something went wrong.</p></div>
                    <button className="button-box"><h1 className="red">try again</h1></button>
                </div>

            </Modal>

        </div>
    )
} 