import { Field } from 'formik'
import styles from './Field.module.scss'
import FieldError from './FieldError'

const CustomField = ({ label, name, ...props }) => (
  <div>
    <Field
      placeholder={label}
      name={name}
      {...props}
      className={styles['custominput']}
    />
    <FieldError name={name} />
    <br />
  </div>
)

export default CustomField
