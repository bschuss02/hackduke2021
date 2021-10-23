const initialState = {
	isDoneLoading: false,
	error: "",
	user: {},
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
			return { ...state, user: action.userData, isDoneLoading: true }
		}

		case "CLEAR_DONE_LOADING": {
			return { ...state, isDoneLoading: false }
		}
		default: {
			return { ...state }
		}
	}
}

export { rootReducer }
