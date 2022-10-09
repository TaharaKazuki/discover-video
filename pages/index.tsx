import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Banner from 'components/banner/banner'
import NavBar from 'components/navbar/navbar'
import SectionCards from 'components/card/section-cards'

import { getVideos } from 'lib/video'
import { VideoType } from '../components/card/types'

type Props = {
  disneyVideos: VideoType
}

const Home: NextPage<Props> = ({ disneyVideos }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username="tahara.kazuki@example.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const disneyVideos = await getVideos()
  console.info(disneyVideos)
  return {
    props: {
      disneyVideos,
    },
  }
}

export default Home
