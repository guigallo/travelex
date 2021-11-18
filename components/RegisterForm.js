import { useState } from 'react'
import classNames from 'classnames'
import { useTranslations } from 'use-intl'
import { Formik, Form } from 'formik'
import Field from './Forms/Field'
import FieldGroup from './Forms/FieldGroup'
import EmailField from './Forms/EmailField'
import PhoneField from './Forms/PhoneField'
import DateField from './Forms/DateField'
import styles from './RegisterForm.module.scss'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const FormTypes = {
  PESSOA_FISICA: 'PessoaFisica',
  CORPORATIVO: 'Corporativo',
  TRABALHE_CONOSCO: 'TrabalheConosco',
}

const INITIAL_VALUE = {
  name: '',
  email: '',
  cpf: '',
  cnpj: '',
  phone: '',
  date: '',
}

const RegisterForm = ({ type: typeProp = FormTypes.PESSOA_FISICA }) => {
  const translate = useTranslations('Form')
  const [type, setType] = useState(typeProp)
  const [submiting, setSubmiting] = useState(false)
  const [sended, setSended] = useState(false)

  const handleValidate = (values) => {
    const errors = {}

    if (!values.name) errors.name = translate('errors.name')
    if (!values.email) errors.email = translate('errors.email')
    if (!values.phone) errors.phone = translate('errors.phone')
    if (!values.date) errors.date = translate('errors.date')
    if (type === FormTypes.PESSOA_FISICA && !values.cpf)
      errors.cpf = translate('errors.cpf')
    if (type === FormTypes.CORPORATIVO && !values.cnpj)
      errors.cnpj = translate('errors.cnpj')

    return errors
  }

  const handleSubmit = async (_, { resetForm }) => {
    setSubmiting(true)
    await sleep(1500)
    setSended(true)
    setSubmiting(false)
    resetForm()

    // try {
    //   /* const headers = {
    //   'Content-Type': 'application/json',
    // }
    // const response = await fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify(values),
    //   headers,
    // }) */
    //   resetForm()
    //   setStatus({ success: 'Formulário enviado com sucesso.' })
    // } catch (error) {
    //   setStatus({
    //     error:
    //       'Houve um erro ao enviar o formulário. Atualize a página e tente novamente.',
    //   })
    // }
  }

  const handleChangeType = (value) => {
    if (submiting) return
    setType(value)
  }

  if (submiting) return <div>Enviando...</div>
  if (sended) return <div>Enviado com sucesso.</div>
  return (
    <div className={styles['register-form']}>
      {type !== FormTypes.TRABALHE_CONOSCO && (
        <div className={styles['select']}>
          <button
            className={classNames({
              [styles['select-active']]: type === FormTypes.PESSOA_FISICA,
            })}
            onClick={() => handleChangeType(FormTypes.PESSOA_FISICA)}
          >
            {translate('person')}
          </button>
          <button
            className={classNames({
              [styles['select-active']]: type === FormTypes.CORPORATIVO,
            })}
            onClick={() => handleChangeType(FormTypes.CORPORATIVO)}
          >
            {translate('corporate')}
          </button>
        </div>
      )}

      <Formik
        validate={handleValidate}
        initialValues={INITIAL_VALUE}
        onSubmit={handleSubmit}
        render={() => (
          <Form className={styles['register-form__form']}>
            <Field
              name="name"
              type="text"
              label={
                type === FormTypes.CORPORATIVO
                  ? translate('inputs.nameCorp')
                  : translate('inputs.name')
              }
            />
            <FieldGroup>
              {type === FormTypes.PESSOA_FISICA && (
                <Field label={translate('inputs.cpf')} name="cpf" type="text" />
              )}
              {type === FormTypes.CORPORATIVO && (
                <Field
                  label={translate('inputs.cnpj')}
                  name="cnpj"
                  type="text"
                />
              )}
              <PhoneField
                label={translate('inputs.phone')}
                name="phone"
                errorMessage={translate('error.phoneInvalid')}
              />
            </FieldGroup>
            <FieldGroup>
              <EmailField
                label={translate('inputs.email')}
                name="email"
                errorMessage={translate('error.emailInvalid')}
              />
              {type !== FormTypes.CORPORATIVO && (
                <DateField
                  label={translate('inputs.date')}
                  name="date"
                  type="text"
                  errorMessage={translate('error.dateInvalid')}
                />
              )}
            </FieldGroup>
            <div className={styles['register-form__divider']} />
            <div className={styles['button']}>
              <button type="submit">{translate('send')}</button>
            </div>
          </Form>
        )}
      />
    </div>
  )
}

export default RegisterForm
export { FormTypes }
