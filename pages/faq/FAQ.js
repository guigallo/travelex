import { useTranslations } from 'use-intl'

function FAQ() {
  const translate = useTranslations('FAQ')
  return (
    <>
      <div>{translate('title')}</div>
    </>
  )
}

export default FAQ
