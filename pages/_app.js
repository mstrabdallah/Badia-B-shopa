import '@styles/antd.less'

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

import '@styles/globals.scss'

// styles components
import '@styles/sections.scss'
import '@components/login/styles/login.scss'
import '@components/register/styles/register.scss'


import LayoutApp from '../layout/layout'
import { wrapper } from '../store/store'
import SetApp from '../settings/setApp';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <SetApp>
          <LayoutApp>
            <Component {...pageProps} />
          </LayoutApp>
        </SetApp>
      </CookiesProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);
