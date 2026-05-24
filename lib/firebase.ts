import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD5CJp2_CVRwEe-a1yE9OT4uAzSbbqGvEc",
  authDomain: "avamoussa-website.firebaseapp.com",
  projectId: "avamoussa-website",
  storageBucket: "avamoussa-website.firebasestorage.app",
  messagingSenderId: "1034491485619",
  appId: "1:1034491485619:web:970626aedd101c5785ffc6"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const db = getFirestore(app)
export const auth = getAuth(app)