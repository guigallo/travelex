import { useState } from 'react'
import classNames from 'classnames'
import { useTranslations } from 'use-intl'
import { Formik, Form } from 'formik'
import Field from './Forms/Field'
import FieldGroup from './Forms/FieldGroup'
import EmailField from './Forms/EmailField'
import PhoneField from './Forms/PhoneField'
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
  corporateName: '',
  cnpj: '',
  name: '',
  cpf: '',
  phone: '',
  email: '',
}

const RegisterForm = ({ type: typeProp = FormTypes.PESSOA_FISICA }) => {
  const translate = useTranslations('Form')
  const [type, setType] = useState(typeProp)
  const [submiting, setSubmiting] = useState(false)
  const [sended, setSended] = useState(false)

  const handleValidate = (values) => {
    const errors = {}

    if (!values.name) errors.name = translate('errors.name')
    if (!values.cpf) errors.cpf = translate('errors.cpf')
    if (!values.phone) errors.phone = translate('errors.phone')
    if (!values.email) errors.email = translate('errors.email')

    if (type === FormTypes.CORPORATIVO) {
      if (!values.cnpj) errors.cnpj = translate('errors.cnpj')
      if (!values.corporateName)
        errors.corporateName = translate('errors.corporateName')
    }

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
            {type === FormTypes.CORPORATIVO && (
              <>
                <Field
                  name="corporateName"
                  type="text"
                  label={translate('inputs.corporateName')}
                />
                <Field
                  name="cnpj"
                  type="text"
                  label={translate('inputs.cnpj')}
                />
              </>
            )}

            <Field
              name="name"
              type="text"
              label={
                type === FormTypes.CORPORATIVO
                  ? translate('inputs.representativeName')
                  : translate('inputs.name')
              }
            />

            <FieldGroup>
              <Field
                name="cpf"
                type="text"
                label={
                  type === FormTypes.CORPORATIVO
                    ? translate('inputs.representativeCpf')
                    : translate('inputs.cpf')
                }
              />
              <PhoneField
                name="phone"
                errorMessage={translate('error.phoneInvalid')}
                label={translate('inputs.phone')}
              />
            </FieldGroup>

            <EmailField
              name="email"
              errorMessage={translate('error.emailInvalid')}
              label={
                type === FormTypes.CORPORATIVO
                  ? translate('inputs.representativeEmail')
                  : translate('inputs.email')
              }
            />

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
