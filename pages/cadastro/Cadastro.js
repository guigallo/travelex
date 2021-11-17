import { useEffect, useState } from 'react'
import { useTranslations } from 'use-intl'
import Banner from '@/components/Banner'
import { useMenuTheme } from '@/contexts/LayoutContext'
import RegisterForm from '@/components/RegisterForm'
import imgBannerOne from '../../public/images/bannerOneHome.png'
import styles from './Cadastro.module.scss'

function Cadastro() {
  const [sended, setSended] = useState(false)
  const translate = useTranslations('openAccount')
  const { changeTheme } = useMenuTheme()

  useEffect(() => {
    changeTheme('light')

    return () => {
      changeTheme('dark')
    }
  }, [changeTheme])

  return (
    <Banner showGradient={false} image={imgBannerOne}>
      <div className={styles['cadastro']}>
        <div className={styles['cadastro__desc']}>
          <p>{translate('description')}</p>
        </div>

        <div className={styles['cadastro__form']}>
          {sended ? (
            <p>{translate('sended')}</p>
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </Banner>
  )
}

export default Cadastro
