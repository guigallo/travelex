import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'use-intl'
import Banner from '@/components/Banner'
import Footer from '@/components/Layout/Footer'
import Bicolumn from '@/components/Bicolumn'
import ChangeThemeOnScroll from '@/components/ChangeThemeOnScroll'
import useLockScrollFirstPage from '@/hooks/useLockScrollFirstPage'
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

function Carousel() {
  const [currentItem, setCurrentItem] = useState(0)

  const handleNext = () => setCurrentItem((v) => Math.min(2, v + 1))

  return (
    <div className={styles['carousel']}>
      <div
        className={styles['carousel__items']}
        onClick={handleNext}
        onPress={handleNext}
        onKeyPress={() => {}}
        role="button"
        tabIndex={0}
        style={{ transform: `translateX(-${currentItem * 100}vw)` }}
      >
        {/** TODO refactor this **/}
        <div className={styles['carousel__items-item']}>
          <Image src={imgInstitutional} alt="" objectFit="cover" />
          <div className={styles['carousel__content']}>
            <div className={styles['carousel__content-left']}>
              <p>+300k</p>
            </div>
            <div className={styles['carousel__content-right']}>
              <p>Novos investimentos no travelex bank em 2021</p>
            </div>
          </div>
        </div>
        <div className={styles['carousel__items-item']}>
          <Image src={bannerInstitutional} alt="" objectFit="cover" />
          <div className={styles['carousel__content']}>
            <div className={styles['carousel__content-left']}>
              <p>+300k</p>
            </div>
            <div className={styles['carousel__content-right']}>
              <p>Novos investimentos no travelex bank em 2021</p>
            </div>
          </div>
        </div>
        <div className={styles['carousel__items-item']}>
          <Image src={imgInstitutional} alt="" objectFit="cover" />
          <div className={styles['carousel__content']}>
            <div className={styles['carousel__content-left']}>
              <p>+300k</p>
            </div>
            <div className={styles['carousel__content-right']}>
              <p>Novos investimentos no travelex bank em 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Institucional() {
  const translate = useTranslations('About')

  useLockScrollFirstPage()

  return (
    <div className={styles['page']}>
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

      <Carousel />

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
