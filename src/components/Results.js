import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	reset,
	selectTipPerPerson,
	selectTotalPerPerson,
} from '../features/calculator/calculatorSlice';
import ResultsGroup from './ResultsGroup';
import Button from './Button';

function Results() {
	const dispatch = useDispatch();
	const tipPerPerson = useSelector(selectTipPerPerson);
	const totalPerPerson = useSelector(selectTotalPerPerson);

	return (
		<div className='results'>
			<ResultsGroup title='Tip Per Person' value={tipPerPerson} />
			<ResultsGroup title='Total Per Person' value={totalPerPerson} />
			<div>
				<Button
					className='button button__error'
					onClick={() => dispatch(reset())}
				>Reset</Button>
			</div>
		</div>
	);
}

export default Results;
