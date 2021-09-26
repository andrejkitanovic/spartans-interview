import * as actionTypes from '../actions/actionTypes';

const initialState = {
	type: null,
	message: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SUCCESS_NOTIFICATION:
			return {
				...state,
				type: 1,
				message: action.message,
			};
		case actionTypes.ERROR_NOTIFICATION:
			return {
				...state,
				type: 0,
				message: action.message,
			};
		default:
			return state;
	}
};

export default reducer;
