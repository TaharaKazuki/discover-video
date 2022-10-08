import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Banner from 'components/banner/banner'
import NavBar from 'components/navbar/navbar'
import Card from 'components/card/card'

const Home: NextPage = () => {
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
      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </div>
  )
}

export default Home
