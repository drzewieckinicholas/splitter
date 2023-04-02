import React from 'react';
import PropTypes from 'prop-types';

function ResultsGroup({title, value}) {
	const displayValue = isNaN(value) ? 0 : value.toFixed(2);

	return (
		<div className='results__group'>
			<div className='results__title'>{title}</div>
			<div className='results__value'>$ {displayValue}</div>
		</div>
	);
}

ResultsGroup.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};

export default ResultsGroup;
