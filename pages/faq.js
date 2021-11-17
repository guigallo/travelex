import { useTranslations } from 'use-intl'
import UsefulPage from '@/components/UsefulPage'
import FAQAccordion from '@/components/FAQAccordion'

function FAQ() {
  const translate = useTranslations('FAQ')

  return (
    <UsefulPage
      title={translate('title')}
      caption={translate('caption')}
      backgroundColor="#a6a6a6"
      alwaysShowTitle={false}
    >
      <FAQAccordion theme="light" />
    </UsefulPage>
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

export default FAQ
