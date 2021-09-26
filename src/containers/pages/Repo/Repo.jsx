import React, { useEffect } from 'react';

import '../../../assets/styles/pages/_repo.scss';

import { BiStar } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineFork } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleRepo } from '../../../store/actions';
import { BackButton } from '../../../components';

const Repo = ({ history }) => {
	const dispatch = useDispatch();
	const { username, repo } = useParams();
	const { singleRepo } = useSelector((state) => state.repos);

	useEffect(() => {
		if (username && repo) {
			dispatch(getSingleRepo(username, repo));
		}
	}, [username, repo, dispatch]);

	return (
		<div className="repo-page">
			<div className="container">
				<div className="row">
					<div className="col-4">
						<BackButton history={history} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="repo-page__info">
							<div className="row">
								<div className="col-8">
									<h1 className="repo-page__header">{singleRepo?.name}</h1>
								</div>
								<div className="col-4">
									<div className="repo-page__stats d-flex">
										<div className="repo-page__stat watch">
											<div className="repo-page__stat-icon">
												<AiOutlineEye />
											</div>
											<p className="repo-page__stat-text">{singleRepo?.watchers}</p>
										</div>
										<div className="repo-page__stat stars">
											<div className="repo-page__stat-icon">
												<BiStar />
											</div>
											<p className="repo-page__stat-text">{singleRepo?.stargazers}</p>
										</div>
										<div className="repo-page__stat forks">
											<div className="repo-page__stat-icon">
												<AiOutlineFork />
											</div>
											<p className="repo-page__stat-text">{singleRepo?.forks}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<p className="repo-page__description">{singleRepo?.description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Repo;
