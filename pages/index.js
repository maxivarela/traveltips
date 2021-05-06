import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import {getTips} from '../lib/api'
import {AddTip} from '../components/shared/SharedComponents'
import FabButton from '../components/FabButton'
import {useRouter} from 'next/router'
// import useTranslation from 'next-translate/useTranslation'

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

export default function Home({data}) {
  const router = useRouter()

  const MailMe = () => {
    return (
      <>
        <div>
          Travel question(s)? &nbsp;
          <a 
            href="mailto:nonoumasy@gmail.com?subject=I need a travel tip" 
            target='_blank' 
            rel="noreferrer"
            >
            📭 &nbsp; Email us
          </a>
        </div>
      </>
    )
  }

  let greeting =
    router.locale === "en" ? "Hello World"
    : router.locale === "ar" ? "مرحبا بالعالم"
    : router.locale === "de" ? "Hallo Welt"
    : router.locale === "es" ? "Hola Mundo"
    : router.locale === "ja" ? "こんにちは世界"
    : router.locale === "pt" ? "Olá Mundo"
    : router.locale === "ru" ? "Привет мир"
    : router.locale === "fr" ? "Bonjour le monde"
    : router.locale === "hi-IN" ? "नमस्ते दुनिया"
    : router.locale === "zh" ? "你好，世界"
    : "";

  return (
    <>
      <div style={{padding: '1rem',}}>
        <Head>
          <title>Travel Tips</title>
          <meta name='keywords' content='travel tips'/>
          <meta name='description' content='travel tips'/>
          <meta name="google-site-verification" content="rYwHVuFCXR-fWkDTidbYR0Rogw38fzyZF-zpd1_w05g" />
        </Head>
        <div className='fab'>
          <FabButton />
        </div>
        <div className='flexRow' style={{ margin: '20px auto' }}>
          <AddTip /> 
          <MailMe />
        </div>
        <h1>{greeting}</h1>
        <TipsComponent tips={data}/>
      </div>
    </>
  )
}
