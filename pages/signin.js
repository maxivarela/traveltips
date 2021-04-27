import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useRouter } from 'next/router'
import firebase from '../firebase'
import {
    FacebookLoginButton,
    GoogleLoginButton,
    TwitterLoginButton,
    GithubLoginButton,
    MicrosoftLoginButton,
} from "react-social-login-buttons";


import {
    Container,
    CssBaseline,
    Typography,
} from '@material-ui/core';

export default function Signin() {
    const { currentUser } = useContext(AuthContext)
    const router = useRouter()

    const googleSigninHandler = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                // return firebase.collections('users').doc(result.user.uid).set({
                //     bio,
                // })
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                router.push('/')
            }).catch((error) => {
                console.log(error)
            });
    }

    const facebookSigninHandler = () => {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // The signed-in user info.
                var user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;

                // ...
                router.push('/')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const twitterSigninHandler = () => {
        const provider = new firebase.auth.TwitterAuthProvider()

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                var token = credential.accessToken;
                var secret = credential.secret;

                // The signed-in user info.
                var user = result.user;
                // ..
                router.push('/')

            }).catch((error) => {
                console.log(error)
            });
    }

    const githubSigninHandler = () => {
        const provider = new firebase.auth.GithubAuthProvider()

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                var token = credential.accessToken;
                var secret = credential.secret;

                // The signed-in user info.
                var user = result.user;
                // ..

            }).catch((error) => {
                console.log(error)
            });
    }

    const microsoftSigninHandler = () => {
        const provider = new firebase.auth.OAuthProvider('microsoft.com')

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                // You can use these server side with your app's credentials to access the Twitter API.
                var token = credential.accessToken;
                var secret = credential.secret;

                // The signed-in user info.
                var user = result.user;
                // ..

            }).catch((error) => {
                console.log(error)
            });
    }

    if (currentUser) {
        router.push('/')
    }


    return (
        <Container maxWidth='sm' style={{ margin: '80px auto', height: 'calc(100vh - 18rem)', }} >
            <div className='flexCol'>
                <CssBaseline />
                <Typography variant='h5' component='h3'>
                    <span style={{ color: '#26978A', }}>Trip</span>Tips
                </Typography>
                Pick your poison:

                <div style={{ width: '300px', marginTop: 40, }}>
                    <GoogleLoginButton onClick={googleSigninHandler} />
                    <FacebookLoginButton onClick={facebookSigninHandler} />
                    <TwitterLoginButton onClick={twitterSigninHandler} />
                    <GithubLoginButton onClick={githubSigninHandler} />
                    <MicrosoftLoginButton onClick={microsoftSigninHandler} />
                </div>

            </div>

        </Container>
    )
}
