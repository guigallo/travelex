import { useTranslations } from 'use-intl'

function Ouvidoria() {
  const translate = useTranslations('Ouvidoria')
  return (
    <>
      <div>{translate('title')}</div>
    </>
  )
}

export default Ouvidoria
