import { useTranslations } from 'use-intl'
import FormPage from '@/components/FormPage'
import { FormTypes } from '@/components/RegisterForm'
import imgBannerTwo from '../public/images/bannerTwoHome.png'

function Cadastro(props) {
  const translate = useTranslations('Jobs')

  return (
    <FormPage
      backgroundImage={imgBannerTwo}
      description={translate('description')}
      descriptionTitle={translate('descriptionTitle')}
      formType={FormTypes.TRABALHE_CONOSCO}
      hideFormType
      theme="light"
      {...props}
    />
  )
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

export default Cadastro
