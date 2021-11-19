import Field from './Field'
import DateInput from './DateInput'

const isDate = (value) => value.length > 8

const DateField = (props) => (
  <Field
    type="phone"
    validate={(value) => !isDate(value) && props.errorMessage}
    component={DateInput}
    {...props}
  />
)

export default DateField
