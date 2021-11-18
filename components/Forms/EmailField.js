import Field from './Field'

const isEmail = (value) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)

const EmailField = (props) => (
  <Field
    type="email"
    validate={(value) => !isEmail(value) && props.errorMessage}
    {...props}
  />
)

export default EmailField
