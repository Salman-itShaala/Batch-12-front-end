import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeByValue, decrement, increment } from "./slices/counterSlice";

function App() {
  return (
    <>
      <ShowCounter />
      <Buttons />
    </>
  );
}

function ShowCounter() {
  const { value } = useSelector((state) => state.counter);

  // console.log(counterState.value); // {value : 0}

  return (
    <>
      <h1>Hii there {value}</h1>
    </>
  );
}

function Buttons() {
  const dispatch = useDispatch();

  function handleButtonClick() {
    dispatch(increment());
  }

  return (
    <>
      <button onClick={() => handleButtonClick()}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button onClick={() => dispatch(changeByValue(5))}>Increse by 5</button>
    </>
  );
}

export default App;
