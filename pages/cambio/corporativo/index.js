import Corporativo from './Corporativo'

export default function InstitucionalPage({ locale }) {
  return <Corporativo locale={locale} />
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
