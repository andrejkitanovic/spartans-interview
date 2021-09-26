import React from 'react';

import '../../assets/styles/components/_single-user.scss';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SingleUser = ({ avatar, name, description, search }) => {
	return (
		<NavLink to={{ pathname: `/${name}`, search }} className="single-user">
			<div className="row">
				<div className="col-4">
					<div className="single-user__avatar">
						<img src={avatar} alt="avatar" />
					</div>
				</div>
				<div className="col-8">
					<p className="single-user__name">{name}</p>
					<p className="single-user__description">{description}</p>
				</div>
			</div>
		</NavLink>
	);
};

SingleUser.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	search: PropTypes.string,
};

export default React.memo(SingleUser);
