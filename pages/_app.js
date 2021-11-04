import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}

export default MyApp
