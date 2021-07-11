import * as ActionTypes from "../actions";

const { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RES, DELETE_RES } =
	ActionTypes;

const initialState = {
	counter: 0,
};

const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case ADD:
			return {
				...state,
				counter: state.counter + action.val,
			};
		case SUBTRACT:
			return {
				...state,
				counter: state.counter - action.val,
			};

		default:
			return state;
	}
};

export default CounterReducer;
