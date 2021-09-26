import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, clearRepos } from '../../../../store/actions';
import { SingleRepo } from '../../../../components';

const HomeRepos = () => {
	const dispatch = useDispatch();
	const { username } = useParams();

	const repos = useSelector((state) => state.repos);

	useEffect(() => {
		dispatch(clearRepos());
		if (username) {
			dispatch(getRepos(username));
		}
	}, [username, dispatch]);

	return (
		<>
			<div className="d-flex justify-content-between">
				<p className="home-page__selected-user">Selected user: <b>{username}</b></p>
				<p className="home-page__results">{repos?.total} Repo Results</p>
			</div>
			<div className="home-page__container">
				<div className="row">
					{repos?.list?.map((repo) => (
						<div key={repo.id} className="col-6">
							<SingleRepo
								user={username}
								name={repo.name}
								description={repo.description}
								date={repo.createdAt}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default HomeRepos;
