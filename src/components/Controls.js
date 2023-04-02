import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	selectBillAmount,
	selectTipPercentage,
	selectNumberOfPeople,
	setBillAmount,
	setTipPercentage,
	setNumberOfPeople,
} from '../features/calculator/calculatorSlice';
import InputGroup from './InputGroup';

function Controls() {
	const dispatch = useDispatch();
	const billAmount = useSelector(selectBillAmount);
	const tipPercentage = useSelector(selectTipPercentage);
	const numberOfPeople = useSelector(selectNumberOfPeople);

	return (
		<div className='controls'>
			<InputGroup
				id='bill-amount'
				label='Bill Amount'
				placeholder='Enter bill amount'
				type='number'
				min={1}
				onChange={e =>
					dispatch(setBillAmount(e.target.value ? parseFloat(e.target.value) : ''))
				}
				value={billAmount}
			/>
			<InputGroup
				id='tip-percentage'
				label='Tip Percentage'
				placeholder='Enter tip percentage'
				type='number'
				min={5}
				onChange={e =>
					dispatch(setTipPercentage(e.target.value ? parseFloat(e.target.value) : ''))
				}
				value={tipPercentage}
			/>
			<InputGroup
				id='number-of-people'
				label='Number of People'
				placeholder='Enter number of people'
				type='number'
				min={1}
				onChange={e =>
					dispatch(setNumberOfPeople(e.target.value ? parseFloat(e.target.value) : ''))
				}
				value={numberOfPeople}
			/>
		</div>
	);
}

export default Controls;
