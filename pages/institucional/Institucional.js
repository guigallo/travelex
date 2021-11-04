import { useTranslations } from 'use-intl'

function Institucional() {
  const translate = useTranslations('About')
  return (
    <>
      <div>{translate('title')}</div>
    </>
  )
}

export default Institucional
