import React, { useState } from 'react'
import styles from './Home.module.scss'
import { useTranslations } from 'use-intl'
import classNames from 'classnames'
import Scroller from '../Scroller'
import Accordion from '../Accordion'
import Footer from '../Layout/Footer'
import imgBannerOne from '../../public/images/bannerOneHome.png'
import imgBannerTwo from '../../public/images/bannerTwoHome.png'
import imgBannerThree from '../../public/images/bannerThreeHome.png'
import imgBannerFour from '../../public/images/bannerFourHome.png'
import Banner from '../Banner'

function Home() {
  const translate = useTranslations('Home')
  const [active, setActive] = useState('')
  const [page, setPage] = useState(0)

  const faqItems = [
    {
      id: 'faq1',
      title: translate('FAQ.questionOneTitle'),
      content: translate('FAQ.questionOne'),
    },
    {
      id: 'faq2',
      title: translate('FAQ.questionTwoTitle'),
      content: translate('FAQ.questionTwo'),
    },
    {
      id: 'faq3',
      title: translate('FAQ.questionThreeTitle'),
      content: translate('FAQ.questionThree'),
    },
  ]

  const bannerItems = [
    {
      id: 'banner1',
      title: translate('bannerOne.title'),
      link: translate('bannerOne.link'),
      image: imgBannerOne,
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
          />
        ))}
      </div>

      <Scroller onBeforePageScroll={setPage}>
        {bannerItems.map((b) => {
          return (
            <Banner key={b.id} title={b.title} link={b.link} image={b.image} />
          )
        })}

        <div
          className={styles['section']}
          style={{ justifyContent: 'flex-end' }}
        >
          <p className={styles['section-subtitle']}>{translate('FAQ.title')}</p>

          {faqItems.map((x) => {
            const isActive = active === x.id
            const activeClass = isActive ? 'active' : ''
            const toggleAccordion = () => {
              setActive(isActive ? '' : x.id)
              // if (isActive) {
              //   setActive('')
              // } else {
              //   setActive(x.id)
              // }
            }
            return (
              <Accordion
                key={x.id}
                id={x.id}
                title={x.title}
                content={x.content}
                activeClass={activeClass}
                toggleAccordion={toggleAccordion}
              />
            )
          })}
        </div>

        <Footer />
      </Scroller>
    </>
  )
}

export default Home
