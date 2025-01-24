import React, { createContext, useState } from "react";

//
export const CounterCont = createContext();

const CounterContextComponenet = ({ children }) => {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("Salman");

  return (
    <CounterCont.Provider value={{ count, setCount, userName, setUserName }}>
      {children}
    </CounterCont.Provider>
  );
};

export default CounterContextComponenet;
