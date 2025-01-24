import React, { useEffect, useRef, useState } from "react";
import styles from "./newcomponent.module.css";

const NewComponent = () => {
  const [name, setName] = useState("");

  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  const isCompleted = true;

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Enter Name" ref={inputRef} />
      <br />
      <br />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
};

export default NewComponent;
