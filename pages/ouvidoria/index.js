import Ouvidoria from './Ouvidoria'

export default function OuvidoriaPage({ locale }) {
  return <Ouvidoria locale={locale} />
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
