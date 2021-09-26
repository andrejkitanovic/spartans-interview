import * as actionTypes from '../actions/actionTypes';

const initialState = {
	total: null,
	list: [],
	singleRepo: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_REPOS:
			return {
				...state,
				total: action.total,
				list: action.list,
			};
		case actionTypes.SET_SINGLE_REPO:
			return {
				...state,
				singleRepo: action.payload,
			};
		case actionTypes.CLEAR_REPOS:
			return {
				...state,
				total: initialState.total,
				list: initialState.list,
			};
		default:
			return state;
	}
};

export default reducer;
