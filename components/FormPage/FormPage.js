import { useEffect } from 'react'
import Banner from '@/components/Banner'
import { useMenuTheme } from '@/contexts/LayoutContext'
import RegisterForm, { FormTypes } from '@/components/RegisterForm'
import styles from './FormPage.module.scss'

function FormPage({
  description,
  descriptionTitle,
  backgroundImage,
  hideFormType = false,
  formType = FormTypes.PESSOA_FISICA,
  theme = 'light',
  ...props
}) {
  const { changeTheme } = useMenuTheme()

  useEffect(() => {
    changeTheme(theme)
    return () => changeTheme('dark')
  }, [changeTheme, theme])

  return (
    <Banner showGradient={false} image={backgroundImage}>
      <div className={styles['page']}>
        <div className={styles['page__desc']}>
          {descriptionTitle && (
            <p className={styles['page__desc-title']}>{descriptionTitle}</p>
          )}
          {description && <p>{description}</p>}
        </div>

        <div className={styles['page__form']}>
          <RegisterForm
            hideType={hideFormType}
            formType={formType}
            {...props}
          />
        </div>
      </div>
    </Banner>
  )
}

export default FormPage
