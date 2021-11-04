import { useTranslations } from 'use-intl'

function Hedge() {
  const translate = useTranslations('Corporate')
  return <div>{translate('title')}</div>
}

function Corporativo() {
  const translate = useTranslations('Corporate')
  return (
    <>
      <Hedge />
      <div>
        <span>{translate('serviceAnalytics')}</span>
      </div>
      <div>
        <span>{translate('serviceAdvice')}</span>
      </div>
      <div>
        <span>{translate('tradeFinance')}</span>
      </div>
      <div>
        <span>{translate('tradeService')}</span>
      </div>
    </>
  )
}

export default Corporativo
