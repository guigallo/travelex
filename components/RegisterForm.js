import { Formik, Form } from 'formik'
import Field from './Forms/Field'
import FieldGroup from './Forms/FieldGroup'
import EmailField from './Forms/EmailField'
import PhoneField from './Forms/PhoneField'
import DateField from './Forms/DateField'
import styles from './RegisterForm.module.scss'

const RegisterForm = () => (
  <div className={styles['register-form']}>
    <Formik
      validate={(values) => {
        let errors = {}

        const errorsMessage = {
          name: 'Nome é requerido',
          cpf: 'CPF é requerido',
          email: 'E-mail é requerido',
          phone: 'Telefone é requerido',
          date: 'Data de nascimento é requerida',
        }

        if (!values.name) {
          errors.name = errorsMessage['name']
        }
        if (!values.email) {
          errors.email = errorsMessage['email']
        }
        if (!values.cpf) {
          errors.cpf = errorsMessage['cpf']
        }
        if (!values.phone) {
          errors.phone = errorsMessage['phone']
        }
        if (!values.date) {
          errors.date = errorsMessage['date']
        }
        return errors
      }}
      initialValues={{
        name: '',
        email: '',
        cpf: '',
        phone: '',
        date: '',
      }}
      onSubmit={handleSubmit}
      render={({ status }) => (
        <Form>
          <Field label="Nome Completo" name="name" type="text" />
          <FieldGroup>
            <Field label="CPF" name="cpf" type="text" />
            <PhoneField name="phone" />
          </FieldGroup>
          <FieldGroup>
            <EmailField name="email" />
            <DateField label="Data de nascimento" name="date" type="text" />
          </FieldGroup>
          <div className={styles['button']}>
            <button type="submit">Enviar</button>
          </div>
          {status && (status.success || status.error)}
        </Form>
      )}
    />
  </div>
)

const handleSubmit = async (values, { setStatus, resetForm }) => {
  try {
    /* const headers = {
      'Content-Type': 'application/json',
    }
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify(values),
      headers,
    }) */
    resetForm()
    setStatus({ success: 'Formulário enviado com sucesso.' })
  } catch (error) {
    setStatus({
      error:
        'Houve um erro ao enviar o formulário. Atualize a página e tente novamente.',
    })
  }
}

export default RegisterForm
