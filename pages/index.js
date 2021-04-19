import Head from 'next/head'
// import styles from '../styles/globals.css'
import TipsComponent from '../components/TipsComponent'

import firebase from '../components/firebase'

import {
  Button,
  TextField,
} from '@material-ui/core';
import Link from 'next/link'

//this runs in build time. don't put code here that you expect to run in browser
export const getStaticProps = async () => {
  try {
    const res = await firebase.firestore().collection('tips').get()
    const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return {
      props: { data }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Travel Tips</title>
        <meta name='keywords' content='travel tips'/>
      </Head>

      {/* <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',}}>
        <Link href='./add'>
          <Button variant='contained' margin='dense' size='small' color='primary' disableElevation style={{ marginBottom: 20}}>
            Add Tip
        </Button>
        </Link>
      </div> */}
      
      <TipsComponent tips={data} />
    </>
  )
}
