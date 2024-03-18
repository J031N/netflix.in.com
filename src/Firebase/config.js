import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAhAvoI28lUD_o9YeiaXn4_C6SHNsCi5iA",
  authDomain: "netflix3-8b851.firebaseapp.com",
  projectId: "netflix3-8b851",
  storageBucket: "netflix3-8b851.appspot.com",
  messagingSenderId: "924997924056",
  appId: "1:924997924056:web:16de71dd234908d465d3ad",
  measurementId: "G-1WK87ZZNBV"
  };
   export default firebase.initializeApp(firebaseConfig)

