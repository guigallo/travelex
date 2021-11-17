import RegisterForm from '@/components/RegisterForm'
//import { useTranslations } from 'use-intl'
import styles from './Cadastro.module.scss'

function Cadastro() {
  // const translate = useTranslations('openAccount')
  return (
    <div className={styles['register']}>
      <RegisterForm />
    </div>
  )
}

export default Cadastro
