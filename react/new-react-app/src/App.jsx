import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./slices/counterSlice";

function App() {
  return (
    <>
      <ShowCounter />
      <Buttons />
    </>
  );
}

function ShowCounter() {
  const counter = useSelector((state) => state.counter);

  console.log(counter); // {value : 0}

  return (
    <>
      <h1>Hii there {counter}</h1>
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

      <button onClick={() => dispatch(decrement())}>Increment</button>
    </>
  );
}

export default App;
