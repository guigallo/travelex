import Field from './Field'
import PhoneInput from './PhoneInput'

const isPhone = (value) => value.length > 10

const PhoneField = (props) => (
  <Field
    type="phone"
    validate={(value) => !isPhone(value) && props.errorMessage}
    component={PhoneInput}
    {...props}
  />
)

export default PhoneField
