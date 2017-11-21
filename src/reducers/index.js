import { combineReducers } from "redux";
// Actions
import { ADD_TODO } from "../actions/index";
import { REMOVE_TODO } from "../actions/index";
import { COMPLETE_TODO } from "../actions/index";

var todoKey = -1;

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			let { text } = action;
			todoKey++;
			return [...state, { text, completed: false, key: todoKey }];
		case REMOVE_TODO:
			return state.filter(comment => 
				comment.key !== action.key
			);
		case COMPLETE_TODO:
			const index = state.findIndex(todo => todo.key === action.key);
			// var newCompleteValue;

			// if ([...state[index].completed]) {
			// 	newCompleteValue = false;
			// } newCompleteValue = true;

			if (index < 0) {
				return state;
			} return [
				...state.slice(0, index),
				{ ...state[index], completed: true }, // should change to some xor logic
				...state.slice(index + 1)
			]
		default:
			return state;
	}
};

const reducers = { todos };

export default combineReducers(reducers);