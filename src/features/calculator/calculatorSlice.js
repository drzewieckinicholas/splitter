import {createSelector, createSlice} from '@reduxjs/toolkit';

const initialState = {
	billAmount: 0,
	tipPercentage: 0,
	numberOfPeople: 1,
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		setBillAmount(state, action) {
			state.billAmount = action.payload;
		},
		setTipPercentage(state, action) {
			state.tipPercentage = action.payload / 100;
		},
		setNumberOfPeople(state, action) {
			state.numberOfPeople = action.payload;
		},
		reset(state) {
			Object.assign(state, initialState);
		},
	},
});

export const {
	setBillAmount,
	setTipPercentage,
	setNumberOfPeople,
	reset,
} = calculatorSlice.actions;

const selectCalculator = state => state.calculator;

export const selectBillAmount = createSelector(selectCalculator, calculator => calculator.billAmount);

export const selectTipPercentage = createSelector(selectCalculator, calculator => calculator.tipPercentage * 100);

export const selectNumberOfPeople = createSelector(selectCalculator, calculator => calculator.numberOfPeople);

export const selectTipPerPerson = createSelector(
	selectCalculator,
	({billAmount, tipPercentage, numberOfPeople}) => (billAmount * tipPercentage) / numberOfPeople,
);

export const selectTotalPerPerson = createSelector(
	selectCalculator,
	({billAmount, tipPercentage, numberOfPeople}) => (billAmount + (billAmount * tipPercentage)) / numberOfPeople,
);

export default calculatorSlice.reducer;
