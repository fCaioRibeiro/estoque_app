import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjyqkC51_9x3dI_j8DzbZ0_wUPmSOpVo4",
  authDomain: "estoque-aci.firebaseapp.com",
  databaseURL: "https://estoque-aci-default-rtdb.firebaseio.com",
  projectId: "estoque-aci",
  storageBucket: "estoque-aci.appspot.com",
  messagingSenderId: "263901109325",
  appId: "1:263901109325:web:c6edb3ecc3a224a7c85004"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);