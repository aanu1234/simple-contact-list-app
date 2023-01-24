import { ACTION_TYPES } from "./actions";

/** default value for our state */
export const INITIAL_STATE = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"],
};

/** our Reducer */
export default function ContactReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_PERSON:
      return state + action.data;
    default:
      return state;
  }
}
