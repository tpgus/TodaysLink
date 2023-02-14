import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig =
  process.env.NODE_ENV === "production"
    ? {
        apiKey: process.env.NEXT_PUBLIC_apiKey,
        authDomain: process.env.NEXT_PUBLIC_authDomain,
        databaseURL: process.env.NEXT_PUBLIC_databaseURL,
        projectId: process.env.NEXT_PUBLIC_projectId,
        storageBucket: process.env.NEXT_PUBLIC_storageBucket,
        messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
        appId: process.env.NEXT_PUBLIC_appId,
        measurementId: process.env.NEXT_PUBLIC_measurementId,
      }
    : {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,
      };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
