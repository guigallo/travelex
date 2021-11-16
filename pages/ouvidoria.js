import { useTranslations } from 'use-intl'
import UsefulPage from '@/components/UsefulPage'

function Ouvidoria() {
  const translate = useTranslations('Ouvidoria')

  return (
    <UsefulPage
      title={translate('title')}
      caption={translate('caption')}
      content={translate('content')}
    />
  )
}

export function getStaticProps({ locale }) {
  const messages = require(`../content/${locale}.json`)

  return {
    props: {
      messages,
      locale,
    },
  }
}

export default Ouvidoria
