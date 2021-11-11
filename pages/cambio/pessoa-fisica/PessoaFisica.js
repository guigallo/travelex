import Banner from '@/components/Banner'
import Grid from '@/components/Grid'
import Footer from '@/components/Layout/Footer'
import Scroller from '@/components/Scroller'
import Title from '@/components/Title'
import styles from './PessoaFisica.module.scss'
import { useTranslations } from 'use-intl'

function PessoaFisica() {
  const translate = useTranslations('Personal')

  return (
    <>
      <Scroller>
        <Banner title={translate('title')} />
        <div className={styles['section']}>
          <Title mainTitle={translate('mainTitle')} />
          <Grid
            isText
            subTitle={translate('mainSubtitle')}
            paragraph={translate('mainParagraph')}
          />
        </div>
        <Footer />
      </Scroller>
    </>
  )
}

export default PessoaFisica
