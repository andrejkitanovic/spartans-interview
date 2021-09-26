import React, { Component } from 'react';

import { BackButton } from '../../components';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="error-page">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<BackButton history={this.props.history} />
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<p>Something went wrong</p>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
