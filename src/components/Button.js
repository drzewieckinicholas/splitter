import React from 'react';
import PropTypes from 'prop-types';

function Button({ariaLabel, children, className, onClick, type}) {
	return (
		<button
			aria-label={ariaLabel}
			className={className}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	className: 'button',
	type: 'button',
	onClick() {},
};

Button.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
};

export default Button;
