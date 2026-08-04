import { useCountContext } from "../context/CountContext";
import { initialState } from "../context/Reducer";
const ComponentA = () => {
  const { dispatch } = useCountContext();
  return (
    <div>
      {" "}
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset", payload: initialState })}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentA;
