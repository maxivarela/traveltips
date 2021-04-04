import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import TipsComponent from '../components/TipsComponent'

import firebase from '../components/firebase'

export const getStaticProps = async () => {

  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const data = await res.json()

  // return {
  //   props: { tips: data}
  // }
  try {
    const querySnapshot = await firebase.firestore().collection('tips').get()
    const result = await querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //  console.log('lisa', result)
    // const data = result.json()
    return {
      props: { tips: result }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function Home({tips}) {
  return (
    <>
      <Head>
        <title>Travel Tips</title>
        <meta name='keywords' content='travel tips'/>
      </Head>
      <h1>Welcome to Travel Tips</h1>
      <TipsComponent tips={tips} />
    </>
  )
}
