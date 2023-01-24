import { ACTION_TYPES } from "./actions";

/** default value for our state */
export const INITIAL_STATE = {
  counter: 0,
};

/** our Reducer */
function CounterReducer(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + action.payload;
    case ACTION_TYPES.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
}

export default CounterReducer;
