import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import mainLogo from '../../../public/images/TravelexCurrency.png'

function Footer() {
  const translate = useTranslations('Layout')

  return (
    <footer>
      <div className={styles['footer']}>
        <div className={styles['footer-text']}>
          <div className={styles['footer-message']}>
            {translate('footer.message')}
          </div>
          <div className={styles['footer-copyright']}>
            {translate('footer.copyright')}
          </div>
        </div>
        <div className={styles['footer-links']}>
          <div className={styles['footer-links-left']}>
            <div className={styles['footer-pages']}>
              <Link href="/faq">
                <a>{translate('footer.FAQ')}</a>
              </Link>

              <Link href="/compliance">
                <a>{translate('footer.compliance')}</a>
              </Link>

              <Link href="/ouvidoria">
                <a>{translate('footer.listen')}</a>
              </Link>

              <Link href="/trabalhe-conosco">
                <a>{translate('footer.workWithUs')}</a>
              </Link>
            </div>
            <div className={styles['footer-mobile-text']}>
              {translate('footer.mobileText')}
            </div>
            <div className={styles['footer-social']}>
              <Link href="/">
                <a>Facebook</a>
              </Link>

              <Link href="/">
                <a>Instagram</a>
              </Link>
            </div>
          </div>
          <div className={styles['footer-contact']}>
            <Link href="/">
              <a>{translate('footer.telephone')}</a>
            </Link>

            <Link href="/">
              <a>{translate('footer.email')}</a>
            </Link>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div className={styles['footer-logo']}>
            <Image src={mainLogo} alt="Travelex Logo" layout="responsive" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
