import { useState } from 'react'
// import { useTranslations } from 'use-intl'
import classNames from 'classnames'
import Scroller, { ScrollerSection } from '@/components/Scroller'
import Title from '@/components/Title'
import styles from './Compliance.module.scss'

function Compliance() {
  const [onCoverPage, setCoverPage] = useState(true)
  // const translate = useTranslations('Compliance')

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
          mainTitle="Título Página Útil"
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </ScrollerSection>

        <ScrollerSection menuTheme="light" className={styles['section']}>
          <div className={styles['content']}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ornare blandit libero in fermentum. Integer placerat nisi quis
              justo interdum, nec consectetur nisl finibus. Vestibulum placerat
              magna non urna vehicula fringilla. Nullam vel purus ac lorem
              pulvinar posuere a ut neque. Quisque suscipit fermentum hendrerit.
              Integer augue nulla, pellentesque ac pellentesque posuere,
              sollicitudin id odio. Aenean ultrices ex sit amet neque posuere
              venenatis. Fusce volutpat rhoncus fermentum. Integer at lobortis
              nisi, id ultricies elit. Donec ut consectetur est, eget mattis
              orci. Nulla ut porta tellus. Integer non cursus quam. Donec quis
              placerat eros.
            </p>
            <p>
              Sed maximus augue magna, ultrices elementum nibh efficitur in.
              Maecenas sed tellus vitae enim accumsan tempus quis quis orci.
              Cras ac est non mauris convallis faucibus. Praesent ac lectus
              lorem. Nullam eget interdum ante. Praesent eu purus ac quam
              porttitor vestibulum. Curabitur accumsan commodo erat, eu
              facilisis turpis. Praesent eget purus vel mi tincidunt blandit
              pretium a massa. In hac habitasse platea dictumst. Praesent
              imperdiet ut ante dignissim cursus. Sed magna mi, consectetur
              porta ullamcorper nec, maximus nec purus. Praesent facilisis
              viverra quam, quis porta metus.
            </p>
          </div>
        </ScrollerSection>
      </Scroller>
    </>
  )
}

export default Compliance
