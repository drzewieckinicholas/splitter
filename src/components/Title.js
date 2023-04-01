import React from 'react';
import PropTypes from 'prop-types';

function Title({className, text}) {
	return <h1 className={className}>{text}</h1>;
}

Title.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
};

Title.defaultProps = {
	className: 'title',
};

export default Title;
