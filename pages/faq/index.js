import FAQ from './FAQ'

export default function FAQPage({ locale }) {
  return <FAQ locale={locale} />
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
