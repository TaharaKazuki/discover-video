import { useState } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import styles from './card.module.scss'
import { IMG_URL } from '../../constants/path'

import cls from 'classnames'
import { motion } from 'framer-motion'

type Props = {
  imgUrl?: string
  size: 'large' | 'medium' | 'small'
}

const Card: FC<Props> = ({ imgUrl = IMG_URL, size = 'medium' }) => {
  const [imgSrc, setImgSrc] = useState(imgUrl)

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  const handleOnError = () => {
    console.info('error')
    setImgSrc(IMG_URL)
  }

  return (
    <div className={styles.container}>
      Card
      <motion.div className={cls(styles.motionWrapper, classMap[size])} whileHover={{ scale: 1.2 }}>
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
        />
      </motion.div>
    </div>
  )
}

export default Card
