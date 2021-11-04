import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Home.module.scss'
import { useTranslations } from 'use-intl'
import Scroller from '../Scroller'
import Accordion from '../Accordion'
import Footer from '../Layout/Footer'

function Home() {
  const translate = useTranslations('Home')
  const [active, setActive] = useState('')

  const faqItems = [
    {
      id: 1,
      title: translate('FAQ.questionOneTitle'),
      content: translate('FAQ.questionOne'),
    },
    {
      id: 2,
      title: translate('FAQ.questionTwoTitle'),
      content: translate('FAQ.questionTwo'),
    },
    {
      id: 3,
      title: translate('FAQ.questionThreeTitle'),
      content: translate('FAQ.questionThree'),
    },
  ]

  const bannerItems = [
    {
      id: 1,
      title: translate('bannerOne.title'),
      link: translate('bannerOne.link'),
    },
    {
      id: 2,
      title: translate('bannerTwo.title'),
      link: translate('bannerTwo.link'),
    },
    {
      id: 3,
      title: translate('bannerThree.title'),
      link: translate('bannerThree.link'),
    },
  ]
  return (
    <Scroller>
      {bannerItems.map((b) => {
        return (
          <div key={b.id} className={styles['banner']}>
            <Link href={b.link}>
              <a>
                <div className={styles['title']}>{b.title}</div>
              </a>
            </Link>
          </div>
        )
      })}
      <div className={styles['banner']} style={{ justifyContent: 'flex-end' }}>
        <p className={styles['banner-subtitle']}>{translate('FAQ.title')}</p>
        {faqItems.map((x) => {
          const isActive = active === x.id
          const activeClass = isActive ? 'active' : ''
          const toggleAccordion = () => {
            if (isActive) {
              setActive('')
            } else {
              setActive(x.id)
            }
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
  )
}

export default Home
