import * as actionTypes from './actionTypes';
import axios from '../../api/axiosInstance';

import config from '../../containers/config.json';

import { startLoading, finishLoading } from './loader';
import { errorsNotification } from './notification';

export const setUsers = (total, list) => {
	return {
		type: actionTypes.SET_USERS,
		total,
		list,
	};
};

export const clearUsers = () => {
	return {
		type: actionTypes.CLEAR_USERS,
	};
};

export const getUsers = () => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.get(`/users?per_page=${config?.Home?.usersPerPage}`)
			.then(({ data }) => {
				let total = null;
				let users = data.map((user) => ({
					id: user.id,
					avatar: user.avatar_url,
					name: user.login,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				}));

				dispatch(setUsers(total, users));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response?.status, response?.data?.message));
				dispatch(finishLoading());
			});
	};
};

export const searchUsers = (query, page) => {
	return (dispatch) => {
		if (!query) return;

		dispatch(startLoading());
		axios
			.get(`/search/users?q=${query}&per_page=${config?.Home?.usersPerPage}&page=${page ? page : 1}&type=users`)
			.then(({ data }) => {
				let total = data.total_count;
				let users = data.items.map((user) => ({
					id: user.id,
					avatar: user.avatar_url,
					name: user.login,
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				}));

				dispatch(setUsers(total, users));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response?.status, response?.data?.message));
				dispatch(finishLoading());
			});
	};
};
