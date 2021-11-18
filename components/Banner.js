import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './Banner.module.scss'

function Banner({ title, id, link, image, video, showGradient = false }) {
  return (
    <div key={id} className={styles['banner']}>
      {image && (
        <div className={styles['banner-media']}>
          <Image src={image} alt={id} />
        </div>
      )}

      {video && (
        <div
          className={classNames(styles['banner-media'], {
            [styles['banner-media__gradient']]: showGradient,
          })}
        >
          <video src={video} alt={id} autoPlay muted loop />
        </div>
      )}

      {showGradient && (
        <div
          className={classNames({
            [styles['banner-media__gradient']]: showGradient,
          })}
        />
      )}

      {link && (
        <div className={styles['title']}>
          <Link href={link}>
            <a>{title} </a>
          </Link>
        </div>
      )}

      {!link && <div className={styles['title']}>{title}</div>}
    </div>
  )
}

export default Banner
