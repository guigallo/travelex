import Link from 'next/link'
import Image from 'next/image'
import styles from './Banner.module.scss'

function Banner({ title, id, link, image, video }) {
  console.log(video)
  return (
    <div key={id} className={styles['banner']}>
      {image && (
        <div className={styles['banner-media']}>
          <Image src={image} alt={id} />
        </div>
      )}
      {video && (
        <div className={styles['banner-media']}>
          <video src={video} alt={id} autoPlay muted loop />
        </div>
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
