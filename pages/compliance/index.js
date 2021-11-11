import Compliance from './Compliance'

export default function CompliancePage({ locale }) {
  return <Compliance locale={locale} />
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
