import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, HomeRepos, Repo } from './pages';

const Routes = () => {
	return (
		<Switch>
			<Route path="/:username/:repo" component={Repo} />
			<Route
				path="/"
				render={(routeProps) => (
					<Home {...routeProps}>
						<Route path="/:username" component={HomeRepos} />
					</Home>
				)}
			/>
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
