import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  // const decrement5Handler = () => {
  //   dispatch({ type: "decrement5" });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>Increment 2</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <div>{/* <button onClick={decrement5Handler}>-5</button> */}</div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
