import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import styles from './Banner.module.scss'

function Banner({ title, id, link, image, children, showGradient = true }) {
  return (
    <div key={id} className={styles['banner']}>
      {image && (
        <div
          className={classNames(styles['banner-img'], {
            [styles['banner-img__gradient']]: showGradient,
          })}
        >
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
      <div className={styles['content']}>{children}</div>
    </div>
  )
}

export default Banner
