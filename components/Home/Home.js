import React, { useRef, useState } from 'react'
import styles from './Home.module.scss'
import { useTranslations } from 'use-intl'
import classNames from 'classnames'
import Scroller from '../Scroller'
import Footer from '../Layout/Footer'
import imgBannerTwo from '../../public/images/bannerTwoHome.png'
import imgBannerThree from '../../public/images/bannerThreeHome.png'
import imgBannerFour from '../../public/images/bannerFourHome.png'
import Banner from '../Banner'
import FAQAccordion from '@/components/FAQAccordion'

function Home() {
  const scroller = useRef(null)
  const translate = useTranslations('Home')
  const [page, setPage] = useState(0)

  const onPressPagination = (page) => scroller.current.goToPage(page)

  const bannerItems = [
    {
      id: 'banner1',
      title: translate('bannerOne.title'),
      link: translate('bannerOne.link'),
      video: '/videos/bg-teste.mp4',
    },
    {
      id: 'banner2',
      title: translate('bannerTwo.title'),
      link: translate('bannerTwo.link'),
      image: imgBannerTwo,
    },
    {
      id: 'banner3',
      title: translate('bannerThree.title'),
      link: translate('bannerThree.link'),
      image: imgBannerThree,
    },
    {
      id: 'banner4',
      title: translate('bannerFour.title'),
      link: translate('bannerFour.link'),
      image: imgBannerFour,
    },
  ]

  return (
    <>
      <div
        className={classNames(styles['pagination'], {
          [styles['pagination-hide']]: page >= bannerItems.length,
        })}
      >
        {bannerItems.map((_, i) => (
          <div
            key={i}
            className={classNames(styles['pagination__item'], {
              [styles['pagination__item-active']]: i === page,
            })}
            role="button"
            tabIndex={i}
            onClick={() => onPressPagination(i)}
            onPress={() => onPressPagination(i)}
            onKeyDown={() => onPressPagination(i)}
          >
            <div className={classNames(styles['pagination__item-bg'])} />
          </div>
        ))}
      </div>

      <Scroller ref={scroller} onBeforePageScroll={setPage}>
        {bannerItems.map((b) => {
          return (
            <Banner
              key={b.id}
              title={b.title}
              link={b.link}
              image={b.image}
              video={b.video}
            />
          )
        })}

        <FAQAccordion showTitle />

        <Footer />
      </Scroller>
    </>
  )
}

export default Home
