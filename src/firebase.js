import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAZopb4ZkdNbO7CbifNomNeAU2isY-d6fE",
  authDomain: "riseuptravel-5e13c.firebaseapp.com",
  projectId: "riseuptravel-5e13c",
  storageBucket: "riseuptravel-5e13c.appspot.com",
  messagingSenderId: "854483472688",
  appId: "1:854483472688:web:a097dcde4a138aa71078f5",
  measurementId: "G-01C4XWXHJN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }

