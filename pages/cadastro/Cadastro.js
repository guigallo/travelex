import { useTranslations } from 'use-intl'
import styles from './Cadastro.module.scss'

function Cadastro() {
  const translate = useTranslations('openAccount')
  return (
    <>
      <div className={styles['account']}>{translate('title')}</div>
    </>
  )
}

export default Cadastro
