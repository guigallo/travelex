import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import mainLogo from '../../../public/images/TravelexBranco.png'
import styles from './Menu.module.scss'

function MenuLinks({ visible }) {
  const translate = useTranslations('Layout')
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <div className={styles[`${visible}`]}>
      <div className={styles['menu-wrapper']}>
        <Link href="/">
          <a>
            <div className={styles['menu-logo']}>
              <Image src={mainLogo} alt="Travelex Logo" layout="responsive" />
            </div>
          </a>
        </Link>
        <div className={styles['menu-left']}>
          <div className={styles['menu-links']}>
            <div className={styles['menu-about']}>
              <div className={styles['menu-about-border']}></div>
              <Link href="/institucional">
                <a>{translate('menu.about')}</a>
              </Link>

              <Link href="/cambio/corporativo">
                <a>{translate('menu.company')}</a>
              </Link>

              <Link href="/cambio/pessoa-fisica">
                <a>{translate('menu.personal')}</a>
              </Link>

              <a href="/blog" target="_blank">
                {translate('menu.blog')}
              </a>
            </div>
            <div className={styles['menu-cta']}>
              <div className={styles['menu-cta-border']}></div>
              <Link href="/cadastro">
                <a>{translate('menu.openAccount')}</a>
              </Link>
            </div>
          </div>
          <div className={styles['menu-lang']}>
            <p>{translate('menu.currentLocale')}</p>
            <Link href={route} locale={otherLocale}>
              <button>
                {translate('menu.switchLocale', { locale: otherLocale })}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuLinks
