import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

function InputGroup({
	ariaLabel,
	className,
	id,
	label,
	min,
	onChange,
	placeholder,
	type,
	value,
}) {
	return (
		<div className={className}>
			<Label htmlFor={id}>{label}</Label>
			<Input
				ariaLabel={ariaLabel}
				id={id}
				min={min}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				value={value}
			/>
		</div>
	);
}

InputGroup.defaultProps = {
	className: 'input__group',
};

InputGroup.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	min: PropTypes.number.isRequired,
	onChange: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default InputGroup;
