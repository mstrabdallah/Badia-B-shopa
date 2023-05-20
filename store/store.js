import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
//
import loginSlice from './slices/auth/loginSlice'
import authSlice from './slices/auth/authSlice'
import registerSlice from './slices/auth/registerSlice'
import settingsSlice from './slices/settings/settingsSlice'
import indexSlice from './slices/index/indexSlice'
import packagesSlice from './slices/packages/packagesSlice'
import contactUsSlice from './slices/contactUs/contactUsSlice'
import fabsSlice from './slices/contactUs/fabsSlice'
import forgetPasswordSlice from './slices/auth/forgetPasswordSlice'
const makeStore = () =>
  configureStore({
    reducer: {
      settings: settingsSlice,
      auth: authSlice,
      login: loginSlice,
      register: registerSlice,
      forgetPassword: forgetPasswordSlice,
      index: indexSlice,
      packages: packagesSlice,
      contactUs: contactUsSlice,
      fabs: fabsSlice,
    },
    devTools: true
  })

export const wrapper = createWrapper(makeStore)
