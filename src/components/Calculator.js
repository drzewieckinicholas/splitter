import React from 'react';
import Controls from './Controls';
import Results from './Results';

function Calculator() {
	return (
		<div className='calculator'>
			<Controls />
			<Results />
		</div>
	);
}

export default Calculator;
