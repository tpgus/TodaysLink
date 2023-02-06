// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfCItaio445G2otC9_IdthuHKzZhpyxSU",
  authDomain: "todays-link.firebaseapp.com",
  databaseURL:
    "https://todays-link-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todays-link",
  storageBucket: "todays-link.appspot.com",
  messagingSenderId: "10681271061",
  appId: "1:10681271061:web:99bb6fda18277f71161f1c",
  measurementId: "G-FMBB4NBQPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const abc = async () => {
  // Add a new document in collection "cities" with ID 'LA'
  await setDoc(doc(db, "abc", "def"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
};

const q = query(collection(db, "abc"), where("country", "==", "KOREA"));

export const defg = async () => {
  const querySnapshot = await getDocs(q);
  const dataList: any = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    dataList.push({
      ...doc.data(),
    });
  });
  return dataList;
};
