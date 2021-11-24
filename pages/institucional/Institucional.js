import Image from 'next/image'
import { useTranslations } from 'use-intl'
import Banner from '@/components/Banner'
import Footer from '@/components/Layout/Footer'
import Bicolumn from '@/components/Bicolumn'
import ChangeThemeOnScroll from '@/components/ChangeThemeOnScroll'
import styles from './Institucional.module.scss'
import bannerInstitutional from '../../public/images/bannerInstitutional.png'
import imgInstitutional from '../../public/images/imgInstitutional.png'

function InstitucionalContent({
  text,
  video = true,
  image = true,
  extraText = true,
}) {
  return (
    <>
      <p>{[text, text].join('\n\n')}</p>
      {video && (
        <div className={styles['media']}>
          <video src="/videos/bg-teste.mp4" controls autoPlay muted loop />
        </div>
      )}
      {extraText && <p>{[text, text].join('\n\n')}</p>}
      {image && (
        <div className={styles['media']}>
          <Image src={imgInstitutional} alt="" />
        </div>
      )}
      {extraText && <p>{[text, text].join('\n\n')}</p>}
    </>
  )
}

function Institucional() {
  const translate = useTranslations('About')

  return (
    <div>
      <ChangeThemeOnScroll theme="dark" />
      <Banner
        showGradient
        title={translate('mainTitle')}
        image={bannerInstitutional}
      />

      <ChangeThemeOnScroll theme="light" />

      <Bicolumn
        id="quem-somos"
        title="Quem Somos"
        subTitle={translate('mainSubtitle')}
      >
        <InstitucionalContent
          text={translate('mainParagraph')}
          video={false}
          image={false}
          extraText={false}
        />
      </Bicolumn>

      <Bicolumn
        id="nossa-trajetoria"
        title="Nossa Trajetória"
        subTitle={translate('mainSubtitle')}
      >
        <InstitucionalContent text={translate('mainParagraph')} />
      </Bicolumn>

      <Bicolumn
        id="responsabilidade-socioambiental"
        title={'Responsabilidade\nSocioambiental'}
        subTitle={translate('mainSubtitle')}
      >
        <InstitucionalContent text={translate('mainParagraph')} />
      </Bicolumn>

      <ChangeThemeOnScroll
        theme="light"
        style={{ transform: 'translateY(-100%)' }}
      />
      <ChangeThemeOnScroll theme="dark" />
      <Footer />
    </div>
  )
}

export default Institucional
