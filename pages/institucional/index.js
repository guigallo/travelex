import Institucional from './Institucional'

export default function InstitucionalPage({ locale }) {
  return <Institucional locale={locale} />
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
