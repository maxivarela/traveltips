import firebase from 'firebase'

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

export default firebase