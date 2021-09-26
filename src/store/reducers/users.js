import * as actionTypes from '../actions/actionTypes';

const initialState = {
	total: null,
	list: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USERS:
			return {
				...state,
				total: action.total,
				list: action.list,
			};
		case actionTypes.CLEAR_USERS:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
