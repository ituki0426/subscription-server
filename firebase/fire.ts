import { initializeApp } from 'firebase-admin/app';
import { getAuth } from "firebase-admin/auth"
export const firebaseConfig = {
	apiKey: "AIzaSyB7E2bLEW7fb9JU2BQorPx6higuYqW5pkU",
	authDomain: "programmist-c0b3c.firebaseapp.com",
	projectId: "programmist-c0b3c",
	storageBucket: "programmist-c0b3c.appspot.com",
	messagingSenderId: "626691359721",
	appId: "1:626691359721:web:5f3451a4b31d3003808178",
	measurementId: "G-6M08Z1GEM9"
};
const app=initializeApp(firebaseConfig)
export const Auth=getAuth()
