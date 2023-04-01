import React from 'react';
import InputGroup from './InputGroup';

function Controls() {
	return (
		<div className='controls'>
			<InputGroup
				id='bill-amount'
				label='Bill Amount'
				placeholder='Enter bill amount'
				type='number'
				defaultValue={1}
				min={1}
			/>
			<InputGroup
				id='tip-percentage'
				label='Tip Percentage'
				placeholder='Enter tip percentage'
				type='number'
				defaultValue={5}
				min={5}
			/>
			<InputGroup
				id='number-of-people'
				label='Number of People'
				placeholder='Enter number of people'
				type='number'
				defaultValue={1}
				min={1}
			/>
		</div>
	);
}

export default Controls;
