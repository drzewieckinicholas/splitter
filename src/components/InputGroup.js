import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

function InputGroup({label, id, type, min, defaultValue, placeholder}) {
	return (
		<div className='input__group'>
			<Label htmlFor={id}>{label}</Label>
			<Input
				id={id}
				type={type}
				min={min}
				defaultValue={defaultValue}
				placeholder={placeholder}
			/>
		</div>
	);
}

InputGroup.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	min: PropTypes.number.isRequired,
	defaultValue: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default InputGroup;
