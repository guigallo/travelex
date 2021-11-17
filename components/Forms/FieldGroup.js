import styles from './FieldGroup.module.scss'

const FieldGroup = ({ children }) => (
  <div className={styles['fieldgroup']}>{children}</div>
)

export default FieldGroup
