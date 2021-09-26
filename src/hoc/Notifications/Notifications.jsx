import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

const Notifications = (props) => {
	const { enqueueSnackbar } = useSnackbar();
	const notification = useSelector((state) => state.notification);

	useEffect(() => {
		switch (notification?.type) {
			case 0:
				enqueueSnackbar(notification.message, {
					variant: 'error',
					autoHideDuration: 3500,
				});
				break;
			case 1:
				enqueueSnackbar(notification.message, {
					variant: 'success',
					autoHideDuration: 3500,
				});
				break;
			default:
				break;
		}
	}, [notification, enqueueSnackbar]);

	return null;
};

export default Notifications;
