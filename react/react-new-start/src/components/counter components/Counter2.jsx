import { CounterCont } from "@/context/CounterContext";
import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Counter2 = () => {
  const { count, setCount } = useContext(CounterCont);
  return (
    <div>
      <Button variant="outlined" onClick={() => setCount((count) => count + 1)}>
        Increase Count {count}
      </Button>
      <Link to="/counter-1">Counter 1 page</Link>
    </div>
  );
};

export default Counter2;
