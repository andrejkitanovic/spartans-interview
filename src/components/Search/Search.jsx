import React from 'react';

import '../../assets/styles/components/_search.scss';

import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ value, onSearch }) => {
	return (
		<form className="search d-flex">
			<input
				defaultValue={value}
				placeholder="Search..."
				className="search__input"
				onChange={(e) => onSearch(e.target.value)}
			></input>
			<AiOutlineSearch/>
		</form>
	);
};

Search.propTypes = {
	value: PropTypes.string,
	onSearch: PropTypes.func
};

export default React.memo(Search);
