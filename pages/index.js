import Head from 'next/head'
import TipsComponent from '../components/TipsComponent'
import {getTips} from '../lib/api'
import {AddTip} from '../components/shared/SharedComponents'
import FabButton from '../components/FabButton'
import {useRouter} from 'next/router'

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
  const {locale, locales} = router

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

  return (
    <>
      <div style={{padding: '1rem',}}>
        <Head>
          <title>Travel Tips</title>
          <meta name='keywords' content='travel tips'/>
          <meta name='description' content='travel tips'/>
          <meta name="google-site-verification" content="rYwHVuFCXR-fWkDTidbYR0Rogw38fzyZF-zpd1_w05g" />
          {locales.map(loc => <link rel="alternate" hreflang={loc} href={`https://traveltips.vercel.app/${loc}${router.asPath}`}/>)}
        </Head>
        <div className='fab'>
          <FabButton />
        </div>
        <div className='flexRow' style={{ margin: '20px auto' }}>
          <AddTip /> 
          <MailMe />
        </div>
        <TipsComponent tips={data} locale={locale} locales={locales}/>
      </div>
    </>
  )
}
