import * as actionTypes from './actionTypes';

export const successNotification = (message) => {
	return {
		type: actionTypes.SUCCESS_NOTIFICATION,
		message: message,
	};
};

export const errorsNotification = (errorCode, message) => {
	return {
		type: actionTypes.ERROR_NOTIFICATION,
		message: `(${errorCode}) ${message}`,
	};
};
