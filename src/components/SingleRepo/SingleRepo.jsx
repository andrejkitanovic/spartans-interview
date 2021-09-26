import React from 'react';

import '../../assets/styles/components/_single-repo.scss';

import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const SingleRepo = ({ user, name, description, date }) => {

	return (
		<div className="single-repo">
			<p className="single-repo__name">
				<b>
					{user}/{name}
				</b>
			</p>
			<p className="single-repo__description">{description}</p>
			<Link to={`/${user}/${name}`} className="single-repo__button">
				View Repo
			</Link>
			<p className="single-repo__date">{dayjs(date).format('DD/MM/YYYY')}</p>
		</div>
	);
};

SingleRepo.propTypes = {
	user: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.instanceOf(Date),
};

export default React.memo(SingleRepo);
