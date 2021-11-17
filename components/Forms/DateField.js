import Field from './Field'
import DateInput from './DateInput'

const isDate = (value) => value.length > 8

const validate = (value) => !isDate(value) && 'Telefone inválido.'

const DateField = (props) => (
  <Field
    label="Telefone"
    type="phone"
    validate={validate}
    component={DateInput}
    {...props}
  />
)

export default DateField
