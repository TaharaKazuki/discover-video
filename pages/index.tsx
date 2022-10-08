import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Banner from 'components/banner/banner'
import NavBar from 'components/navbar/navbar'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Netflix</h1>
      <NavBar username="tahara.kazuki@example.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
    </div>
  )
}

export default Home
