import firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAw8imXwkZNiFb2VpHqnKR5DlzuqkXs2Fc",
  authDomain: "netflix2-0-4236d.firebaseapp.com",
  projectId: "netflix2-0-4236d",
  storageBucket: "netflix2-0-4236d.appspot.com",
  messagingSenderId: "95387880363",
  appId: "1:95387880363:web:b973c4ab976141bad7a0ee",
  measurementId: "G-2G6KT75MGP"
  };
   export default firebase.initializeApp(firebaseConfig)

