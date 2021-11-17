import InputMask from 'react-input-mask'

const DateInput = ({ field, ...props }) => (
  <InputMask type="date" mask="99/99/9999" maskChar="" {...field} {...props} />
)

export default DateInput
