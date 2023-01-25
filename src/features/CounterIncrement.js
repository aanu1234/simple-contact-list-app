import React, { useReducer } from "react";
import Button from "../components/Button";
import { ACTION_TYPES } from "../reducers/actions";
import CounterReducer, { INITIAL_STATE } from "../reducers/CounterReducer";

function CounterIncrement() {
  const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "4rem",
      }}
    >
      <Button
        className="btn"
        text="<"
        onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT, payload: 1 })}
      />
      <span className="counter">{state.counter}</span>
      <Button
        className="btn"
        text=">"
        onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT, payload: 1 })}
      />
    </div>
  );
}

export default CounterIncrement;
