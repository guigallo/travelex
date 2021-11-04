import Home from '@/components/Home'

export default function HomePage({ locale }) {
  return <Home locale={locale} />
}

export function getStaticProps({ locale }) {
  const messages = require(`../content/${locale}.json`)

  return {
    props: {
      messages,
      locale,
    },
  }
}
