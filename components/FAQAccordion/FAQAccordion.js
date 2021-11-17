import { useState } from 'react'
import { useTranslations } from 'use-intl'
import classNames from 'classnames'
import Accordion from '../Accordion'
import styles from './FAQAccordion.module.scss'

function FAQAccordion({ showTitle, theme = 'dark' }) {
  const translate = useTranslations('FAQ')
  const [active, setActive] = useState('')

  const faqItems = [
    {
      id: 'faq1',
      title: translate('questionOneTitle'),
      content: translate('questionOne'),
    },
    {
      id: 'faq2',
      title: translate('questionTwoTitle'),
      content: translate('questionTwo'),
    },
    {
      id: 'faq3',
      title: translate('questionThreeTitle'),
      content: translate('questionThree'),
    },
  ]

  return (
    <div
      className={classNames(styles['section'], {
        [styles['section__light']]: theme === 'light',
      })}
    >
      {showTitle && (
        <p className={styles['section__subtitle']}>{translate('title')}</p>
      )}

      {faqItems.map((x) => {
        const isActive = active === x.id
        const activeClass = isActive ? 'active' : ''
        const toggleAccordion = () => setActive(isActive ? '' : x.id)

        return (
          <Accordion
            key={x.id}
            id={x.id}
            title={x.title}
            content={x.content}
            activeClass={activeClass}
            toggleAccordion={toggleAccordion}
            theme={theme}
          />
        )
      })}
    </div>
  )
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

export default FAQAccordion
