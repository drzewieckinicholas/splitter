import React from 'react';
import PropTypes from 'prop-types';

function Input({id, className, type, min, defaultValue, placeholder}) {
	return (
		<input
			id={id}
			className={className}
			type={type}
			min={min}
			defaultValue={defaultValue}
			placeholder={placeholder}
		/>
	);
}

Input.defaultProps = {
	className: 'input',
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
	min: PropTypes.number.isRequired,
	defaultValue: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default Input;
