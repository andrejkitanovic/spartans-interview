import * as actionTypes from './actionTypes';
import axios from '../../api/axiosInstance';

import { startLoading, finishLoading } from './loader';
import { errorsNotification } from './notification';

export const setRepos = (total, list) => {
	return {
		type: actionTypes.SET_REPOS,
		total,
		list,
	};
};

export const setSingleRepo = (payload) => {
	return {
		type: actionTypes.SET_SINGLE_REPO,
		payload,
	};
};

export const clearRepos = () => {
	return {
		type: actionTypes.CLEAR_REPOS,
	};
};

export const getRepos = (user) => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.get(`/users/${user}/repos`)
			.then(({ data }) => {
				const total = data.length;
				const repos = data.map((repo) => ({
					id: repo.id,
					name: repo.name,
					description: repo.description,
					createdAt: new Date(repo.created_at),
				}));

				dispatch(setRepos(total, repos));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response?.status, response?.data?.message));
				dispatch(finishLoading());
			});
	};
};

export const getSingleRepo = (user, repo) => {
	return (dispatch) => {
		dispatch(startLoading());
		axios
			.get(`/repos/${user}/${repo}`)
			.then(({ data }) => {
		
				
				const singleRepo = {
					id: data.id,
					name: data.full_name,
					description: data.description,
					stargazers: data.stargazers_count,
					watchers: data.watchers_count,
					forks: data.forks,
				};

				dispatch(setSingleRepo(singleRepo));
				dispatch(finishLoading());
			})
			.catch(({ response }) => {
				dispatch(errorsNotification(response?.status, response?.data?.message));
				dispatch(finishLoading());
			});
	};
};
