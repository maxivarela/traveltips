import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        // observer on the Auth object: tracks whether a user is logged in or not. it listens for changes. You can also get the currently signed-in user by using the currentUser property.
        firebase.auth().onAuthStateChanged(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
