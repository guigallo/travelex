import Cadastro from './Cadastro'

export default function InstitucionalPage({ locale, messages }) {
  return <Cadastro locale={locale} messages={messages} />
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
