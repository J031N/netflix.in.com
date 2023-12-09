import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAxCIq9VQhYTwUJx2Ydj01lOUlbltoMV3U",
    authDomain: "netflixappclone-935e3.firebaseapp.com",
    projectId: "netflixappclone-935e3",
    storageBucket: "netflixappclone-935e3.appspot.com",
    messagingSenderId: "802536654088",
    appId: "1:802536654088:web:f1b5f0627724fda36c98bd",
    measurementId: "G-THW9B9T7H3"
  };
   export default firebase.initializeApp(firebaseConfig)

