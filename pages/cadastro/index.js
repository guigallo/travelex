import Cadastro from './Cadastro'

export default function InstitucionalPage({ locale }) {
  return <Cadastro locale={locale} />
}

export function getStaticProps({ locale }) {
  const messages = require(`../../content/${locale}.json`)

  return {
    props: {
      messages,
      locale,
    },
  }
}
