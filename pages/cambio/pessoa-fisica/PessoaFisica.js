import { useTranslations } from 'use-intl'

function PessoaFisica() {
  const translate = useTranslations('Personal')
  return (
    <>
      <div>{translate('title')}</div>
    </>
  )
}

export default PessoaFisica
