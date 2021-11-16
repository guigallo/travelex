import { useState } from 'react'
import classNames from 'classnames'
import Scroller, { ScrollerSection } from '@/components/Scroller'
import Title from '@/components/Title'
import Footer from '@/components/Layout/Footer'
import styles from './UsefulPage.module.scss'

function UsefulPage({ title, caption, content }) {
  const [onCoverPage, setCoverPage] = useState(true)

  const onBeforePageScroll = (page) => {
    setCoverPage(page === 0)
  }

  return (
    <>
      <div
        className={classNames(styles['title'], {
          [styles['title__second-page']]: !onCoverPage,
        })}
      >
        <Title
          mainTitle={title}
          titleClassName={classNames(styles['title__txt'], {
            [styles['title__txt__second-page']]: !onCoverPage,
          })}
        />
        <div
          className={classNames(styles['title__border'], {
            [styles['title__border__second-page']]: !onCoverPage,
          })}
        />
      </div>

      <Scroller onBeforePageScroll={onBeforePageScroll}>
        <ScrollerSection menuTheme="light">
          <div className={styles['caption']}>
            <p>{caption}</p>
          </div>
        </ScrollerSection>

        <ScrollerSection menuTheme="light" className={styles['section']}>
          <div className={styles['content']}>
            <p>{content}</p>
          </div>
        </ScrollerSection>

        <Footer />
      </Scroller>
    </>
  )
}

export default UsefulPage
