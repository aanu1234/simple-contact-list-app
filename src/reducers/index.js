import { combineReducers, createStore } from "redux";
// import ContactReducer from "./ContactReducer";
import CounterReducer from "./CounterReducer";

// const allReducers = combineReducers({
//   counter: CounterReducer,
//   contacts: ContactReducer,
// });

const store = createStore(CounterReducer);

export default store;
