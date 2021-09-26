import React from 'react';

import '../../assets/styles/components/_pagination.scss';

import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const range = (from, to, step = 1) => {
		let i = from;
		const range = [];

		while (i <= to) {
			range.push(i);
			i += step;
		}

		return range;
	};

	const fetchPageNumbers = () => {
		const totalNumbers = 5;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - 1);
			const endPage = Math.min(totalPages - 1, currentPage + 1);
			let pages = range(startPage, endPage);

			const hasLeftSpill = startPage > 2;
			const hasRightSpill = totalPages - endPage > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			switch (true) {
				case hasLeftSpill && !hasRightSpill: {
					const extraPages = range(startPage - spillOffset, startPage - 1);
					pages = ['LEFT', ...extraPages, ...pages];
					break;
				}

				case !hasLeftSpill && hasRightSpill: {
					const extraPages = range(endPage + 1, endPage + spillOffset);
					pages = [...pages, ...extraPages, 'RIGHT'];
					break;
				}

				case hasLeftSpill && hasRightSpill:
				default: {
					pages = ['LEFT', ...pages, 'RIGHT'];
					break;
				}
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	return (
		<div className="pagination d-flex">
			{fetchPageNumbers()?.map((button) => {
				if (isNaN(button)) {
					return (
						<div key={button} className="pagination__dots">
							...
						</div>
					);
				} else {
					return (
						<div
							key={button}
							className={`pagination__number ${currentPage === button ? 'active' : ''}`}
							onClick={() => onPageChange(button)}
						>
							{button}
						</div>
					);
				}
			})}
		</div>
	);
};

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
	onPageChange: PropTypes.func
};

export default React.memo(Pagination);
