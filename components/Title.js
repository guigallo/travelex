import styles from './Title.module.scss'

function Title({ mainTitle, hasCaption, caption }) {
  return (
    <>
      <div className={styles['title']}>{mainTitle}</div>
      {hasCaption && <div className={styles['caption']}>{caption}</div>}
    </>
  )
}

export default Title
