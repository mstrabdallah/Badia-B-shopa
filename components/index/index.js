import style from './styles/index.module.scss'
import HeadSection from './sections/head_section'
import DesignsForYourWebsiteSection from './sections/designsForYourWebsite_section'
import ServicesSupportYourSiteSection from './sections/servicesSupportYourSite_section'
import SitesOnThePlatformSectios from './sections/sitesOnThePlatform_section'
import PaymentPackagesSectios from '../tools/sections/PaymentPackages_sectios'
import WhatDoTheySayAboutUsSectios from './sections/whatDoTheySayAboutUs_section'
import RegisterServiceProvider from './sections/registerServiceProvider_section'
import DownAppMobile from './sections/downAppMobile_section'
import ConnectWithTeam from './sections/connectWithTeam'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '@store/slices/auth/forgetPasswordSlice'
import { useRouter } from 'next/router'

export default function Index () {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (router.query.token) {
      dispatch(setCurrentPage())
    }
  }, [dispatch])

  return (
    <>
      <section className={style.indexPage}>
        <div className='page_ indexPage_'>
          <HeadSection />
          <DesignsForYourWebsiteSection />
          <ServicesSupportYourSiteSection />
          <SitesOnThePlatformSectios />
          <PaymentPackagesSectios />
          <WhatDoTheySayAboutUsSectios />
          <RegisterServiceProvider />
          <DownAppMobile />
          <ConnectWithTeam />
        </div>
      </section>
    </>
  )
}
