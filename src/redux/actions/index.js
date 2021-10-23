import { db, firebase } from "../../firebase/index"

const login = (email, password) => {
	return async (dispatch, getState) => {
		console.log("logging in", email, password)
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password)
		} catch (error) {
			console.log(
				"🚀 ~ file: index.js ~ line 12 ~ return ~ error",
				error.message,
			)
			dispatch({ type: "SET_ERROR", error: error.message })
		}
	}
}

const signup = (email, username, password) => {
	return async (dispatch, getState) => {
		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password)
			const newUserData = { email, username }
			const currentUid = firebase.auth().currentUser.uid
			await db
				.collection("users")
				.doc(currentUid)
				.set(newUserData)
		} catch (error) {
			console.log(
				"🚀 ~ file: index.js ~ line 12 ~ return ~ error",
				error.message,
			)
			dispatch({ type: "SET_ERROR", error: error.message })
		}
	}
}

const signout = () => {
	return async (dispatch, getState) => {
		console.log("signing out")
		firebase.auth().signOut()
		dispatch({ type: "SIGN_OUT" })
	}
}

const loadData = () => {
	return async (dispatch, getState) => {
		const { currentUser } = firebase.auth()
		const currentUid = currentUser.uid
		const userDoc = (
			await db
				.collection("users")
				.doc(currentUid)
				.get()
		).data()

		const userData = {
			...userDoc,
		}

		dispatch({ type: "DONE_LOADING", userData })
	}
}

const testing = () => {
	return async (dispatch, getState) => {
		console.log("testing")
		const snapshot = await db
			.collection("users")
			.doc("a")
			.get()
		const data = snapshot.data()
		console.log("🚀 ~ file: index.js ~ line 48 ~ return ~ data", data)
	}
}

export { signup, signout, login, loadData, testing }
