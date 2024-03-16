// src/redux/reducers/exampleReducer.js
import { EXAMPLE_ACTION } from '../actions/actionTypes';

const initialState = {
  // Define initial state properties here
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        // Update state based on action payload
      };
    default:
      return state;
  }
};

export default exampleReducer;