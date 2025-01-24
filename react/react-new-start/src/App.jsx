import "./App.css";
import Counter1 from "./components/counter components/Counter1";
import Counter2 from "./components/counter components/Counter2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterContextComponenet from "./context/CounterContext";

function App() {
  return (
    <BrowserRouter>
      <CounterContextComponenet>
        <Routes>
          <Route path="counter-1" element={<Counter1 />} />
          <Route path="counter-2" element={<Counter2 />} />
        </Routes>
      </CounterContextComponenet>
    </BrowserRouter>
  );
}

/*
<div className="h-screen flex flex-col gap-8 justify-center items-center bg-slate-400">
        <h1>Counter is : {count}</h1>
        <CounterContext.Provider value={[count, setCount]}>
          <Counter1 />
          <Counter2 />
        </CounterContext.Provider>
</div>


*/

export default App;

// Material ui
// Shad cn

// framer motion
