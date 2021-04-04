import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import TipsComponent from '../components/TipsComponent'

import firebase from '../components/firebase'

import {
  Button,
} from '@material-ui/core';

export const getStaticProps = async () => {
  try {
    const querySnapshot = await firebase.firestore().collection('tips').get()
    const result = await querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
      
      <Button variant='contained' color='primary' disableElevation style={{marginBottom: 20}}>
        Add Tip
      </Button>
      <TipsComponent tips={tips} />
    </>
  )
}
