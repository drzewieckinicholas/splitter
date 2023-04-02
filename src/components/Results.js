import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
	reset,
	selectTipPerPerson,
	selectTotalPerPerson,
} from '../features/calculator/calculatorSlice';
import ResultsGroup from './ResultsGroup';

function Results() {
	const dispatch = useDispatch();
	const tipPerPerson = useSelector(selectTipPerPerson);
	const totalPerPerson = useSelector(selectTotalPerPerson);

	return (
		<div className='results'>
			<ResultsGroup title='Tip Per Person' value={tipPerPerson} />
			<ResultsGroup title='Total Per Person' value={totalPerPerson} />
			<div>
				<button type='submit' onClick={() => dispatch(reset())}>
                    Reset
				</button>
			</div>
		</div>
	);
}

export default Results;
