const initialState = {
	isDoneLoading: false,
	error: "",
	user: {},
	feed: [],
	upvotedPosts: [],
	upvotes: 0,
	searchedUsers: [],
}
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case "SIGN_OUT": {
			return initialState
		}
		case "SET_ERROR": {
			return { ...state, error: action.error }
		}

		case "CLEAR_ERROR": {
			return { ...state, error: "" }
		}

		case "DONE_LOADING": {
			action.userData
			console.log(
				"🚀 ~ file: index.js ~ line 25 ~ rootReducer ~ 	action.userData",
				action.userData,
			)
			return {
				...state,
				user: action.userData,
				isDoneLoading: true,
				feed: action.feed,
				myPosts: action.myPosts,
				upvotedPosts: action.upvotedPosts,
				upvotes: action.upvotes,
			}
		}

		case "CLEAR_DONE_LOADING": {
			return { ...state, isDoneLoading: false }
		}

		case "SEARCH_USERS_SUCCESS": {
			return { ...state, searchedUsers: action.data }
		}

		default: {
			return { ...state }
		}
	}
}

export { rootReducer }
