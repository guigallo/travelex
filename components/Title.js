import classNames from 'classnames'
import styles from './Title.module.scss'

function Title({
  mainTitle,
  hasCaption,
  caption,
  titleClassName = undefined,
  captionClassName = undefined,
}) {
  return (
    <>
      <div className={classNames(styles['title'], titleClassName)}>
        {mainTitle}
      </div>
      {hasCaption && (
        <div className={classNames(styles['caption'], captionClassName)}>
          {caption}
        </div>
      )}
    </>
  )
}

export default Title
