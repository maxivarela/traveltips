import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import {AddTip} from '../components/shared/SharedComponents'
import firebase from '../components/firebase'

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
      <AddTip/>
      <TipsComponent tips={data} />
    </>
  )
}
