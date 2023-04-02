import React from 'react';
import PropTypes from 'prop-types';

function Input({ariaLabel, className, id, min, onChange, placeholder, type, value}) {
	return (
		<input
			aria-label={ariaLabel}
			className={className}
			id={id}
			min={min}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
			value={value}
		/>
	);
}

Input.defaultProps = {
	className: 'input',
};

Input.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	min: PropTypes.number.isRequired,
	onChange: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
