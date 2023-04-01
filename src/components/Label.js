import React from 'react';
import PropTypes from 'prop-types';

function Label({className, htmlFor, children}) {
	return (
		<label className={className} htmlFor={htmlFor}>
			{children}
		</label>
	);
}

Label.defaultProps = {
	className: 'label',
};

Label.propTypes = {
	className: PropTypes.string,
	htmlFor: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Label;
