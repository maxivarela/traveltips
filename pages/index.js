import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import {getTips} from './api'
import {AddTip} from '../components/shared/SharedComponents'

//this runs in build time. don't put code here that you expect to run in browser
export const getServerSideProps = async () => {
  try {
    const data = await getTips()
    return {
      props: { data },
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// export const getStaticProps = async () => {
//   try {
//     const data = await getTips()
//     return {
//       props: { data },
//       revalidate: 10,
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

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
          <meta name='description' content='travel tips'/>
        </Head>
        <div className='flexRow' style={{ margin: '20px auto' }}>
          <AddTip /> 
          <MailMe />
        </div>
        
        <TipsComponent tips={data}/>
      </div>
    </>
  )
}
