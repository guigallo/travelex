import { useTranslations } from 'use-intl'

function Compliance() {
  const translate = useTranslations('Compliance')
  return (
    <>
      <div>{translate('title')}</div>
    </>
  )
}

export default Compliance
