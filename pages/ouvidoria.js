import { useTranslations } from 'use-intl'
import UsefulPageLegacy from '@/components/UsefulPageLegacy'

function Ouvidoria() {
  const translate = useTranslations('Ouvidoria')

  return (
    <UsefulPageLegacy
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
