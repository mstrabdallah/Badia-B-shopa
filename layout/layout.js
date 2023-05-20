import Head from "next/head";
import { ConfigProvider } from 'antd';
import HeaderApp from './header/header'
import Footer from "./footer/footer";
import useTranslation from "next-translate/useTranslation";
import MsgHandleApi from "../components/tools/msg/msgHandleApi";
import FabS1 from "../components/tools/fabs/fabS1";
import { setFirstLoad } from "../store/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from './loadingScreen/loadingScreen'
import { useEffect } from "react";
function LayoutApp({ children }) {
    const { t, lang } = useTranslation('common')


    const { firstLoad } = useSelector(({ auth }) => auth);

    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(setFirstLoad(true))
        }, 1000)
    }, [dispatch])
    return (
        <>
            <ConfigProvider direction={lang === 'ar' ? "rtl" : "ltr"}>
                <HeaderApp />
                <div className="app_">
                    {children}
                </div>
                <Footer />
                <MsgHandleApi />
                <FabS1 />
            </ConfigProvider>

            {!firstLoad && <LoadingScreen />}

        </>

    )
}

export default LayoutApp;