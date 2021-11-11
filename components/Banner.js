import Link from 'next/link'
import Image from 'next/image'
import styles from './Banner.module.scss'

function Banner({ title, id, link, image }) {
  return (
    <div key={id} className={styles['banner']}>
      {image && (
        <div className={styles['banner-img']}>
          <Image src={image} alt={id} />
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
