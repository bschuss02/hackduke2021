import { db, firebase } from "../../firebase/index"
import uuid from "react-native-uuid"

const login = (email, password) => {
	return async (dispatch, getState) => {
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password)
		} catch (error) {
			dispatch({ type: "SET_ERROR", error: error.message })
		}
	}
}

const signup = (email, username, password) => {
	return async (dispatch, getState) => {
		try {
			await firebase.auth().createUserWithEmailAndPassword(email, password)
			const avatar =
				"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235"
			const newUserData = {
				email,
				username,
				followers: [],
				following: [],
				upvotedPosts: [],
				avatar,
			}
			const currentUid = firebase.auth().currentUser.uid
			await db
				.collection("users")
				.doc(currentUid)
				.set(newUserData)
		} catch (error) {
			dispatch({ type: "SET_ERROR", error: error.message })
		}
	}
}

const signout = () => {
	return async (dispatch, getState) => {
		firebase.auth().signOut()
		dispatch({ type: "SIGN_OUT" })
	}
}

const getCurrentUserData = async () => {
	const currentUid = firebase.auth().currentUser.uid
	const userDoc = (
		await db
			.collection("users")
			.doc(currentUid)
			.get()
	).data()

	return userDoc
}

const getQuerySnapshots = async (following) => {
	let querySnapshots = []

	for (const person of following) {
		const { uid } = person
		const querySnapshot = await db
			.collection("users")
			.doc(uid)
			.collection("posts")
			.get()
		querySnapshots.push(querySnapshot)
	}

	return querySnapshots
}

const loadFeed = async (userData) => {
	const currentUid = firebase.auth().currentUser.uid
	let { following } = userData
	following.push({ uid: currentUid })

	const querySnapshots = await getQuerySnapshots(following)

	let feed = []
	querySnapshots.forEach((querySnapshot) => {
		let posts = querySnapshot.docs.map((doc) => {
			const data = doc.data()
			return { ...data, postId: doc.id }
		})
		feed = [...feed, ...posts]
	})

	feed.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))

	return feed
}

const loadMyPosts = async () => {
	const currentUid = firebase.auth().currentUser.uid
	const querySnapshot = db
		.collection("users")
		.doc(currentUid)
		.collection("posts")
		.get()

	const data = (await querySnapshot).docs.map((doc) => doc.data())
	data.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
	return data
}

const getQuerySnapshots2 = async (upvotedPosts) => {
	let querySnapshots = []

	for (const post of upvotedPosts) {
		const { uid, postId } = post
		const querySnapshot = await db
			.collection("users")
			.doc(uid)
			.collection("posts")
			.doc(postId)
			.get()
		querySnapshots.push(querySnapshot)
	}
	return querySnapshots
}

const loadUpvotedPosts = async (userData) => {
	const { upvotedPosts } = userData
	const querySnapshots = await getQuerySnapshots2(upvotedPosts)
	const posts = querySnapshots.map((snapshot) => snapshot.data())
	return posts
}

const loadData = () => {
	return async (dispatch, getState) => {
		const userData = await getCurrentUserData()
		const feed = await loadFeed(userData)
		const myPosts = await loadMyPosts()
		const upvotedPosts = await loadUpvotedPosts(userData)

		dispatch({ type: "DONE_LOADING", userData, feed, myPosts, upvotedPosts })
	}
}

const testing = () => {
	return async (dispatch, getState) => {
		const snapshot = await db
			.collection("users")
			.doc("a")
			.get()
		const data = snapshot.data()
	}
}

const createPost = (title, text, contacts) => {
	return async (dispatch, getState) => {
		const currentUid = firebase.auth().currentUser.uid
		const avatar =
			"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235"
		const username = getState().user.username
		const timestamp = Date.now()
		const postId = uuid.v4()
		const doc = {
			avatar,
			username,
			uid: currentUid,
			title,
			text,
			contacts,
			timestamp,
			comments: [],
			upvotes: 0,
		}
		await db
			.collection("users")
			.doc(currentUid)
			.collection("posts")
			.doc(postId)
			.set(doc)

		dispatch(loadData())
	}
}

const followUser = (otherUid, otherUsername, otherAvatar) => {
	return async (dispatch, getState) => {
		const currentUid = firebase.auth().currentUser.uid
		const newFollowingObj = {
			uid: otherUid,
			username: otherUsername,
			avatar: otherAvatar,
		}
		const currentUser = getState().user
		const currentUsername = currentUser.username
		const currentAvatar = currentUser.avatar
		const newFollowersObj = {
			uid: currentUid,
			username: currentUsername,
			avatar: currentAvatar,
		}
		const currentUserData = (
			await db
				.collection("users")
				.doc(currentUid)
				.get()
		).data()
		let { following } = currentUserData
		following = [...following, newFollowingObj]
		await db
			.collection("users")
			.doc(currentUid)
			.update({ following })

		const otherUserData = (
			await db
				.collection("users")
				.doc(otherUid)
				.get()
		).data()
		let { followers } = otherUserData
		followers = [...followers, newFollowersObj]
		await db
			.collection("users")
			.doc(otherUid)
			.update({ followers })
	}
}

const getUserData = async () => {
	const currentUid = firebase.auth().currentUser.uid
	const querySnapshot = await db
		.collection("users")
		.doc(currentUid)
		.get()
	return querySnapshot.data()
}

const upvotePost = (uid, postId, downvote) => {
	return async (dispatch, getState) => {
		const currentUid = firebase.auth().currentUser.uid
		// console.log("🚀 ~ file: index.js ~ line 187 ~ upvotePost ~ uid", uid)
		// console.log("🚀 ~ file: index.js ~ line 187 ~ upvotePost ~ postId", postId)
		// console.log(
		// 	"🚀 ~ file: index.js ~ line 187 ~ upvotePost ~ downvote",
		// 	downvote,
		// )
		const querySnapshot = await db
			.collection("users")
			.doc(uid)
			.collection("posts")
			.doc(postId)
			.get()
		const queryData = querySnapshot.data()
		const { upvotes } = queryData
		let newTotal = upvotes + downvote

		await db
			.collection("users")
			.doc(uid)
			.collection("posts")
			.doc(postId)
			.update({ upvotes: newTotal })

		const record = { uid, postId, downvote }
		const userData = await getUserData()
		let { upvotedPosts } = userData
		upvotedPosts = [record, ...upvotedPosts]
		const unique = {}
		upvotedPosts = upvotedPosts.filter((post) => {
			const isRepeat = post.postId in unique
			unique[post.postId] = true
			return !isRepeat
		})

		await db
			.collection("users")
			.doc(currentUid)
			.update({ upvotedPosts })

		dispatch(loadData())
	}
}

export {
	signup,
	signout,
	login,
	loadData,
	testing,
	createPost,
	followUser,
	upvotePost,
}
