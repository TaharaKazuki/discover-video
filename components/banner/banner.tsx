import { FC } from 'react'
import styles from './banner.module.scss'

type Props = {
  title: string
  subTitle: string
  imgUrl: string
}

const Banner: FC<Props> = ({ title, subTitle, imgUrl }) => {
  const handleOnPlay = () => {
    console.info('handleOnPlay')
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      />
    </div>
  )
}

export default Banner
