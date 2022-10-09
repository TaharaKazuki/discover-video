import type { FC } from 'react'
import Card from './card'
import styles from './section-cards.module.scss'
import { SizeType, ImgUrlType } from './types'

type Props = {
  title: string
  size: SizeType
  videos: { imgUrl: ImgUrlType }[]
}

const SectionCards: FC<Props> = ({ title, videos, size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, i) => (
          <Card imgUrl={video.imgUrl} id={i} key={i} size={size} />
        ))}
      </div>
    </section>
  )
}

export default SectionCards
