import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import {AddTip} from '../components/shared/SharedComponents'
import firebase from '../components/firebase'

//this runs in build time. don't put code here that you expect to run in browser
export const getStaticProps = async () => {
  try {
    const res = await firebase.firestore().collection('tips').orderBy('createdAt', 'desc').get()
    const data = await res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return {
      props: { data },
      revalidate: 10,
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function Home({data}) {

  const MailMe = () => {

    return (
      <>
        <div>
          Do you have a travel question? &nbsp;
          <a href="mailto:nonoumasy@gmail.com?subject=I need a travel tip" target='_blank' rel="noreferrer">Email us</a>
        </div>
      </>
    )
  }
  
  return (
    <>
      <div style={{padding: '1rem',}}>
        <Head>
          <title>Travel Tips</title>
          <meta name='keywords' content='travel tips'/>
        </Head>
        <div className='flexRow' style={{ marginBottom: 10 }}>
          
          <AddTip /> 
          <MailMe />
        </div>
        
        <TipsComponent tips={data}/>
      </div>
    </>
  )
}
