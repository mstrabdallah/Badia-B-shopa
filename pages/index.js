import Head from 'next/head'
import Index from '@components/index/index'
import useTranslation from 'next-translate/useTranslation'

// export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
//   await store.dispatch(getMemberships())
//   return {
//     revalidate: 10, // In seconds
//   }
// });

export default function IndexPage() {
  const { t } = useTranslation('common')
  return (
    <div>
      <Head>
        <title>{t('B-shopa')}</title>
        <meta key='description' name='description' content='My new title' />
        <meta key='keywords' name='keywords' content='My, new, title' />
      </Head>

      <Index />
    </div>
  )
}
