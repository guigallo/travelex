import PessoaFisica from './PessoaFisica'

export default function InstitucionalPage({ locale }) {
  return <PessoaFisica locale={locale} />
}

export function getStaticProps({ locale }) {
  const messages = require(`../../../content/${locale}.json`)

  return {
    props: {
      messages,
      locale,
    },
  }
}
