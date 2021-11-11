import { useTranslations } from 'use-intl'

function TrabalheConosco() {
  const translate = useTranslations('WorkWithUs')
  return (
    <>
      <div>{translate('title')}</div>
    </>
  )
}

export default TrabalheConosco
