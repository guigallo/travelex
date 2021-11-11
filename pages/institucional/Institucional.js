import Banner from '@/components/Banner'
import Grid from '@/components/Grid'
import Footer from '@/components/Layout/Footer'
import Scroller from '@/components/Scroller'
import Title from '@/components/Title'
import styles from './Institucional.module.scss'
import { useTranslations } from 'use-intl'
import bannerInstitutional from '../../public/images/bannerInstitutional.png'
import imgInstitutional from '../../public/images/imgInstitutional.png'

function Institucional() {
  const translate = useTranslations('About')

  return (
    <>
      <Scroller>
        <Banner title={translate('mainTitle')} image={bannerInstitutional} />
        <div className={styles['section']}>
          <Title mainTitle={translate('mainTitle')} />
          <Grid
            isText
            subTitle={translate('mainSubtitle')}
            paragraph={translate('mainParagraph')}
          />
        </div>
        <div className={styles['img-section']}>
          <Grid
            isImg
            img={imgInstitutional}
            imgCaption={translate('mainImgCaption')}
          />
        </div>
        <Footer />
      </Scroller>
    </>
  )
}

export default Institucional
