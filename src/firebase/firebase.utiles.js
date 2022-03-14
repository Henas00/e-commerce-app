import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAFm_1soixVjSiAAmXnlbLU6K7gBbGPK3Y",
  authDomain: "crwn-shop-db-f6c3d.firebaseapp.com",
  projectId: "crwn-shop-db-f6c3d",
  storageBucket: "crwn-shop-db-f6c3d.appspot.com",
  messagingSenderId: "760083104751",
  appId: "1:760083104751:web:17e8958f7139c49a65ec1a",
  measurementId: "G-DW6VQ6GRYK"
}

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth()
const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
// sign in with google
export const signInWithGoogle = () => signInWithPopup(auth, provider);


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
await setDoc(userDocRef, { displayName, email, createdAt})
    } catch(error) {
console.log( 'error creating the user', error.message)
    }
  } 
  return userDocRef
  //if user data exist
//return userDocRef
  //not exist
  //create / set the document with the data from user auth in my collection
}