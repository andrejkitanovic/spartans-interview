import React from 'react';

import '../../assets/styles/components/_back-button.scss';

import PropTypes from 'prop-types';
import { BiArrowBack } from 'react-icons/bi';

const BackButton = ({ history }) => {
	return (
		<button
			onClick={() => {
				history.goBack();
			}}
			className="back-button"
		>
			<BiArrowBack />
		</button>
	);
};

BackButton.propTypes = {
	history: PropTypes.object,
};

export default React.memo(BackButton);
