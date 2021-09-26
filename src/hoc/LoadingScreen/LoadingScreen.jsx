import React from 'react';

import '../../assets/styles/components/_loading-screen.scss';

import { useSelector } from 'react-redux';

const LoadingScreen = ({ force }) => {
	const loader = useSelector((state) => state.loader);

	if (!loader && !force) {
		return null;
	}

	return (
		<div className="loading-screen">
			<div className="loading-screen__circle"></div>
		</div>
	);
};

export default LoadingScreen;