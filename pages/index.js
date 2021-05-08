import Head from 'next/head'
import GridComponent from '../components/GridComponent'
import {getTips} from '../lib/api'
import {AddTip} from '../components/shared/SharedComponents'
import FabButton from '../components/FabButton'
import {useRouter} from 'next/router'
import { NextSeo } from 'next-seo'

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
  const title = 'Free Travel Tips Hacks Safety Budget Guide Cheap Spots'
  const description = 'TripTips is a social platform to create and explore travel tips and tricks. Travel tips during covid. Travel tips packing. Travel tips for beginners.'
  const shareUrl = `https://traveltips.vercel.app`

  const SEO = {
    openGraph: {
      type: 'website',
      url: shareUrl,
      title: title,
      description: description,
      locale: 'en_US',
      site_name: 'TripTips',
    },
    facebook: {
      appId: '296712571894670'
    },
    twitter: {
      title: title,
      description: description,
      image: 'https://firebasestorage.googleapis.com/v0/b/travel-tips-29526.appspot.com/o/1-slide-central-asia-horse-riders-yurt-pano.jpg?alt=media&token=f4f96887-9de9-4de3-9c48-fe5fe7331b08',
      handle: '@nonoumasy',
      site: '@TripTips7',
      cardType: 'summary_large_image',
    },
  }

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
          <meta name='description' content='TripTips is a social platform to create and explore travel tips and tricks. Travel tips during covid. Travel tips packing. Travel tips for beginners.'/>
          <meta name="google-site-verification" content="rYwHVuFCXR-fWkDTidbYR0Rogw38fzyZF-zpd1_w05g" />
          {locales.map((loc, index) => <link key={index} rel="alternate" hreflang={loc} href={`https://traveltips.vercel.app/${loc}${router.asPath}`}/>)}
        </Head>
        <NextSeo {...SEO} noindex={true} />
        {/* <div className='fab'>
          <FabButton />
        </div> */}
        <div className='flexRowBetween' style={{ margin: '20px auto' }}>
          <AddTip /> 
          <MailMe />
        </div>
        <GridComponent tips={data} locale={locale} locales={locales}/>
      </div>
    </>
  )
}
