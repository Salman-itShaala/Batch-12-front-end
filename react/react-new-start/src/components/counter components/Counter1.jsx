import { CounterCont } from "@/context/CounterContext";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Counter1 = () => {
  const { count, setCount, userName } = useContext(CounterCont);

  return (
    <div>
      <Button variant="contained" onClick={() => setCount((prev) => prev + 1)}>
        Increase Count {count}
      </Button>

      <Link to="/counter-2">Counter 2 page</Link>

      <Card>
        <p>{userName}</p>
        <img src="" alt="this is image" />
      </Card>

      <Card>
        <p>this is another para</p>

        <p>this is another para</p>

        <img src="" alt="this is image" />
      </Card>
    </div>
  );
};

function Card({ children }) {
  return (
    <div className="border-2 rounded-md border-red-500 p-8 mb-10 w-32">
      {children}
    </div>
  );
}

export default Counter1;
