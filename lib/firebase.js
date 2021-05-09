import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyD3rj3ozaBPHrh5lofJi2_YAzOMYOcc_V4",
    authDomain: "travel-tips-29526.firebaseapp.com",
    projectId: "travel-tips-29526",
    storageBucket: "travel-tips-29526.appspot.com",
    messagingSenderId: "62490528725",
    appId: "1:62490528725:web:aa5d3e2e55fc6eda3fcb5c"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}
console.log('firebase successully initialized.')

export default firebase

// Converts a firestore document to JSON
export function postToJSON(doc) {
    const data = {
        id: doc.id,
        ...doc.data()
    };
    return {
        ...data,
        // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
        //coordinates: [data?.coordinates ? (data?.coordinates[0]?.toString(), data?.coordinates[1]?.toString()) : null]
    };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis   