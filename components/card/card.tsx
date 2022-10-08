import { FC } from 'react'
import Image from 'next/image'
import styles from './card.module.scss'

type Props = {
  imgUrl: string
  size: 'large' | 'medium' | 'small'
}

const Card: FC<Props> = ({ imgUrl, size }) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image src={imgUrl} alt="image" layout="fill" className={styles.cardImg} />
      </div>
    </div>
  )
}

export default Card
