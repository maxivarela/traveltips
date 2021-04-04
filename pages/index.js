import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home({tips}) {
  return (
    <>
      <Head>
        <title>Travel Tips</title>
        <meta name='keywords' content='travel tips'/>
      </Head>
      <h1>Welcome to Travel Tips 1.0</h1>
    </>
  )
}
