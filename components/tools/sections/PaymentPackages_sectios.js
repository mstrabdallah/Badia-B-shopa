import { Col, Row, Switch } from "antd";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisibleReg } from "../../../store/slices/auth/registerSlice";
import { changeTypePackage, getMemberships } from "../../../store/slices/packages/packagesSlice";
import ButtonsS1 from "../../tools/buttons/buttonsS1";
import LoadingPageS1 from '../loading/loadingPageS1'
export default function PaymentPackagesSectios() {
    const { t } = useTranslation('common')

    const { memberships, membershipsloading, typePackage } = useSelector(({ packages }) => packages)
    const data = [
        {
            title: 'عادي',
            price: '$50',
        },
        {
            title: 'متوسط',
            price: '$25',
        },

        {
            title: 'مخصص',
            price: '$75',
        },

    ]

    const { checkUser } = useSelector(({ auth }) => auth)

    const dispatch = useDispatch()


    const onChangePaymentType = (e) => {
        e ?
            dispatch(changeTypePackage('monthly'))
            :
            dispatch(changeTypePackage('yearly'))
    }

    const showModal = () => {
        dispatch(setIsModalVisibleReg(true))
    };

    useEffect(() => {
        dispatch(getMemberships())
    }, [dispatch])
    return (
        <>

            <section className="PaymentPackages pageMin">
                <div className="container_ ">

                    <div className="sectionsHeader">
                        <h2>
                            {t('Payment Packages at b-shopa')}
                        </h2>

                        <p>
                            {t('b-shopa payment packages are custom built to suit your needs.')}
                        </p>

                    </div>

                    <div className="content">

                        <div className="typePrice">

                            <div className="years">{t('yearly')}</div>
                            <Switch

                                defaultChecked={typePackage === 'monthly' ? true : false}
                                onChange={onChangePaymentType}
                            />
                            <div className="Monthlyƒ">{t('monthly')}</div>
                        </div>


 
                        {
                            membershipsloading ?
                                <LoadingPageS1 />
                                :
                                <Row gutter={40}>

                                    {
                                        memberships.map((res, i) =>
                                            <Col xs={24} md={24} lg={8} key={i}>

                                                <div className={"PackagesItem " + (i === 2 ? 'PackagesItemS2' : '')} >
                                                    <div className="Pheader">
                                                        <div className="note">{t('new')}</div>
                                                        <div className="title">
                                                            {res.title}
                                                        </div>

                                                        <div className="price">
                                                            {
                                                                typePackage === "monthly" ?
                                                                    res.monthly_budget
                                                                    :
                                                                    res.yearly_budget
                                                            }

                                                        </div>

                                                    </div>
                                                    <div className="Pcontent">
                                                        <h3>يتضمن كل من:</h3>

                                                        <ul>
                                                            <li>مثال للخدمه المعروضه</li>
                                                            <li>مثال للخدمه المعروضه</li>
                                                            <li>مثال للخدمه المعروضه</li>
                                                            <li>مثال للخدمه المعروضه</li>
                                                            <li>مثال للخدمه المعروضه</li>
                                                        </ul>

                                                    </div>


                                                    {
                                                        !checkUser &&
                                                        <div className="Pfooter" onClick={showModal}>
                                                            <ButtonsS1 text={t('start now')} />
                                                        </div>
                                                    }
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                        }

                    </div>


                </div>
            </section>
        </>


    )
}
