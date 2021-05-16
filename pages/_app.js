import { useEffect } from 'react';
import Layout from '../components/Layout'
import { AuthProvider } from '../lib/AuthContext'
import PropTypes from 'prop-types';

import { 
  ThemeProvider } 
  from '@material-ui/core/styles';
import theme from '../src/theme';
import { useRouter } from 'next/router'

import * as gtag from '../lib/gtag'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
