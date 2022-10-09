import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Banner from 'components/banner/banner'
import NavBar from 'components/navbar/navbar'
import SectionCards from 'components/card/section-cards'

import { getVideos, getPopularVideos } from 'lib/video'
import { VideoType } from '../components/card/types'

type Props = {
  disneyVideos: VideoType
  productivityVideos: VideoType
  travelVideos: VideoType
  popularVideos: VideoType
}

const Home: NextPage<Props> = ({
  disneyVideos,
  productivityVideos,
  travelVideos,
  popularVideos,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavBar username="tahara.kazuki@example.com" />
        <Banner
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards title="Productivity" videos={productivityVideos} size="medium" />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const disneyVideos = await getVideos('disney trailer')
  const productivityVideos = await getVideos('Productivity')
  const travelVideos = await getVideos('indie music')
  const popularVideos = await getPopularVideos()

  return {
    props: {
      disneyVideos,
      productivityVideos,
      travelVideos,
      popularVideos,
    },
  }
}

export default Home
