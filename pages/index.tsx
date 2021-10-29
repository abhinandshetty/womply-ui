import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { Button } from 'components/button'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Womply helps small businesses thrive in a digital world</title>
        <meta
          name="description"
          content="Home - Womply helps small businesses thrive in a digital world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.header}>Header text</h3>
        <Button label="Click" />
      </main>
    </>
  )
}

export default Home
