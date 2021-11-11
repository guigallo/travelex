import Image from 'next/image'
import styles from './Grid.module.scss'

function Grid({ isText, isImg, img, imgCaption, subTitle, paragraph }) {
  return (
    <>
      {isText && (
        <div className={styles['grid']}>
          <div className={styles['grid-left']}>
            <div className={styles['grid-subtitle']}>{subTitle}</div>
          </div>
          <div className={styles['grid-right']}>
            <div className={styles['grid-paragraph']}>{paragraph}</div>
          </div>
        </div>
      )}
      {isImg && (
        <div className={styles['grid']}>
          <div className={styles['grid-left']}>
            <div className={styles['grid-caption']}>{imgCaption}</div>
          </div>
          <div className={styles['grid-right']}>
            <div className={styles['grid-img']}>
              <Image src={img} alt={imgCaption} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Grid
