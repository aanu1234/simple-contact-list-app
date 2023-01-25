import { ACTION_TYPES } from "./actions";

/** default value for our state */
export const INITIAL_STATE = {
  counter: 0,
};

/** our Reducer */
function CounterReducer(state = 0, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      state.counter += action.payload;
      return { counter: state.counter };
    case ACTION_TYPES.DECREMENT:
      state.counter -= action.payload;
      return { counter: state.counter };
    default:
      return state;
  }
}

export default CounterReducer;
