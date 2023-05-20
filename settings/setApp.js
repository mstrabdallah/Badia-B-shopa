import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useMemo } from "react";
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";
import { setCheckUser } from "@store/slices/auth/authSlice";


import allUrl from '@settings/allUrl.json'
// import MsgHandleApi from '@components/tools/msg/msgHandleApi'
// import { setMsgHandleApi } from "../store/slices/settings/settingsSlice";


function SetApp({ children }) {
    //
    const { t, lang } = useTranslation()
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['BToken']);




    useMemo(() => {
        axios.defaults.baseURL = allUrl.apiUrl;
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.defaults.headers.common['lang'] = lang;



        // axios.interceptors.response.use((response) => {
        //     return response;
        // }, (error) => {
        //     if (error.response.status === 404) {
        //         console.log('404')
        //         dispatch(setMsgHandleApi(404))
        //     }
        //     return Promise.reject(error);
        // });

        // // Set the AUTH token for any request
        // axios.interceptors.request.use((config) => {
        //     config.headers.Authorization = cookies.BToken ? `Bearer ${token}` : '';
        //     return config;
        // })
    }, [lang])


    useEffect(() => {
        if (cookies.BToken) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.BToken;
            dispatch(setCheckUser(true))
        }

    }, [cookies.BToken, dispatch])

    return children

}

export default SetApp;
