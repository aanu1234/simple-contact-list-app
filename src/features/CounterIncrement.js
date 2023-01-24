import React, { useReducer } from "react";
import Button from "../components/Button";
import { ACTION_TYPES } from "../reducers/actions";
import CounterReducer, { INITIAL_STATE } from "../reducers/CounterReducer";

function CounterIncrement() {
  const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE);

  return (
    <>
      <p>{state.counter}</p>
      <Button
        text="Increment"
        onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT, payload: 1 })}
      />
      <Button
        text="Decrement"
        onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT, payload: 1 })}
      />
    </>
  );
}

export default CounterIncrement;
