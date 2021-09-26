import React, { Suspense } from 'react';

import './assets/styles/application.scss';

import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { Layout, ErrorBoundary, LoadingScreen, Notifications } from './hoc';
import Routes from './containers/routes';

function App() {
	return (
		<div className="App">
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				maxSnack={2}
			>
				<BrowserRouter>
					<Notifications />
					<LoadingScreen />
					<Layout>
						<Suspense fallback={<LoadingScreen force />}>
							<ErrorBoundary>
								<Routes />
							</ErrorBoundary>
						</Suspense>
					</Layout>
				</BrowserRouter>
			</SnackbarProvider>
		</div>
	);
}

export default App;
