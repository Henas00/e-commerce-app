import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth()
// sign in with google
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

//database 
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation})
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
return await signInWithEmailAndPassword(auth, email, password)
}