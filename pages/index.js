import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

import firebase from '../pages/firebase'

export const getStaticProps = async () => {

  // const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // const data = await res.json()

  // return {
  //   props: { tips: data}
  // }
  try {
    const querySnapshot = await firebase.firestore().collection('tips').get()
    const result = await querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('lisa', result)
    // const data = result.json()
    return {
      props: { tips: result}
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

      {tips?.map(item => (
        <div key={item.id} style={{width: 600, marginTop: 40,}}>
          <div>
            <img src={item?.userImage} alt="" style={{ width: 30, height: 30, borderRadius: 50, objectFit: 'cover'}} /> {item.user}
          </div>
          <h2>{item?.title}</h2>
          <img src={item?.image} alt="" style={{ width: 600, height: 400, objectFit: 'cover'}}/>
          <div style={{marginTop: 20,}}>{item.tip}</div>
        </div>
        
      ))}
    </>
  )
}
