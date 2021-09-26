import React, { useEffect, useMemo } from 'react';

import '../../../assets/styles/pages/_home.scss';
import config from '../../config.json';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SingleUser, Search, Pagination } from '../../../components';
import { getUsers, searchUsers } from '../../../store/actions';

let searchTimeout = null;

const Home = ({ history, children }) => {
	const dispatch = useDispatch();
	const { search } = useLocation();
	const queryParams = useMemo(() => new URLSearchParams(search), [search]);

	const { searchDelay, searchAfter, maximumUserPage, usersPerPage } = config?.Home;

	const users = useSelector((state) => state.users);

	useEffect(() => {
		if (!queryParams.has('q')) {
			dispatch(getUsers());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	useEffect(() => {
		const searchQuery = queryParams.get('q');
		const pageQuery = queryParams.get('page');
		dispatch(searchUsers(searchQuery, pageQuery));

		return () => clearTimeout(searchTimeout);
	}, [queryParams, dispatch]);

	const onSearchHandler = (value) => {
		if (value.length > searchAfter) {
			clearTimeout(searchTimeout);

			searchTimeout = setTimeout(() => {
				history.push({
					search: `?q=${value}`,
				});
			}, searchDelay);
		} else if (queryParams.has('q')) {
			let searchString = '';
			if (queryParams.has('page')) {
				searchString = `?page=${queryParams.get('page')}`;
			}

			history.push({ search: searchString });
		}
	};

	const onPageChangeHandler = (page) => {
		history.push({
			search: `?q=${queryParams.get('q')}&page=${page}`,
		});
	};

	return (
		<div className="home-page">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4">
						<Search value={queryParams.get('q')} onSearch={onSearchHandler} />
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-4">
						<section className="home-page__users">
							{users.total && <p className="home-page__results">{users.total} User Results</p>}
							<div className="home-page__container users">
								{users?.list?.map((user) => (
									<SingleUser key={user.id} {...user} search={search} />
								))}
							</div>
							{users.total && users.total > usersPerPage && (
								<div className="home-page__users-pagination">
									<Pagination
										currentPage={queryParams.has('page') ? parseInt(queryParams.get('page')) : 1}
										totalPages={Math.min(maximumUserPage, parseInt(users.total / usersPerPage))}
										onPageChange={onPageChangeHandler}
									/>
								</div>
							)}
						</section>
					</div>
					<div className="col-12 col-lg-8">
						<section className="home-page__repos">{children}</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
