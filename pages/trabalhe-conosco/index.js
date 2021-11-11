import TrabalheConosco from './TrabalheConosco'

export default function TrabalheConoscoPage({ locale }) {
  return <TrabalheConosco locale={locale} />
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
