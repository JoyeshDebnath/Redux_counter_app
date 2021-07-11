import * as ActionTypes from "../actions";

const { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RES, DELETE_RES } =
	ActionTypes;

const initialState = {
	results: [],
};

const ResultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case STORE_RES:
			return {
				...state,
				results: state.results.concat({
					id: new Date(),
					val: action.result,
				}),
			};
		case DELETE_RES:
			const updatedArr = state.results.filter(
				(res) => res.id !== action.res_id
			);
			return {
				...state,
				results: updatedArr,
			};

		default:
			return state;
	}
};

export default ResultsReducer;
