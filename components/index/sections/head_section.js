import { Col, Row } from "antd";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisibleReg } from "../../../store/slices/auth/registerSlice";
import ButtonsS1 from "../../tools/buttons/buttonsS1";

export default function HeadSection() {
    const { t } = useTranslation('common')

    const { checkUser } = useSelector(({ auth }) => auth)

    const dispatch = useDispatch()
    const showModal = () => {
        dispatch(setIsModalVisibleReg(true))
    };
    return (
        <>
            <section className="headSection">
                <div className="container_">

                    <div className="content flexCenter">
                        <h1>
                            {t('Welcome to B-shopa')}
                        </h1>

                        <p>
                            {t('With an easy and simple control panel, you can build your own store now.')}
                        </p>
                        {
                            !checkUser && <>
                                <div onClick={showModal}>
                                    <ButtonsS1 text={t('start now')} />
                                </div>

                                <div className="headdes" dangerouslySetInnerHTML={{ __html: t("You don't need to enter your credit card details.. Try it now for free..<br />or <span>See a free trial</span>") }}>


                                </div>
                            </>

                        }

                    </div>

                    <div className="image_" >
                        <Image alt="sectionHead imageDash" src={'/images/sectionHead_imageDash.png'} height={680} width={973} />
                    </div>

                    <div id="scroll"></div>
                </div>
            </section>
        </>


    )
}
