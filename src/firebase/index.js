import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
	apiKey: "AIzaSyAotR51GqJW14UB4fvwbDfkSyOHSRLzs6o",
	authDomain: "hack-duke-2022.firebaseapp.com",
	projectId: "hack-duke-2022",
	storageBucket: "hack-duke-2022.appspot.com",
	messagingSenderId: "547869876157",
	appId: "1:547869876157:web:167f1a07441c64d3ed3cd4",
	measurementId: "G-1K7FV0H6MZ",
}

let Firebase
if (firebase.apps.length === 0) {
	Firebase = firebase.initializeApp(firebaseConfig)
}

var db = firebase.firestore()

const thing = "howdy"

export { db, firebase, Firebase, thing }
