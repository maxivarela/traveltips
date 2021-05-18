import { useContext } from 'react'
import { AuthContext } from '../lib/AuthContext'
import { useRouter } from 'next/router'
import firebase, {auth} from '../lib/firebase'
import {
    FacebookLoginButton,
    GoogleLoginButton,
    TwitterLoginButton,
    GithubLoginButton,
} from "react-social-login-buttons";

import {
    Container,
} from '@material-ui/core';

export default function Signin() {
    const { currentUser } = useContext(AuthContext)
    const router = useRouter()

    const googleSigninHandler = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
        router.push('/')
    }

    const facebookSigninHandler = async () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        await auth.signInWithPopup(provider)
        router.push('/')
    }

    const twitterSigninHandler = async () => {
        const provider = new firebase.auth.TwitterAuthProvider()
        await auth.signInWithPopup(provider)
        router.push('/')
    }

    const githubSigninHandler = async () => {
        const provider =  new firebase.auth.GithubAuthProvider()
        await auth.signInWithPopup(provider)
        router.push('/')
    }

    if (currentUser) {
        router.push('/')
    }

    return (
        <Container maxWidth='xs' style={{ margin: '80px auto', height: 'calc(100vh - 18rem)', }} >
            <GoogleLoginButton onClick={googleSigninHandler} />
            <FacebookLoginButton onClick={facebookSigninHandler} />
            <TwitterLoginButton onClick={twitterSigninHandler} />
            <GithubLoginButton onClick={githubSigninHandler} />
        </Container>
    )
}
