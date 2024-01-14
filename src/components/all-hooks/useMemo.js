import React, { useState, useMemo } from "react";

/**
 * A component that demonstrates the use of the useMemo hook in React.
 * useMemo is used to memoize a function's return value so that it is only recomputed when its dependencies change.
 * In this component, useMemo is used to memoize the result of a slow function that doubles a number.
 * useMemo is also used to memoize an object that contains styles for the component based on a dark theme.
 */
function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  function slowFunction(num) {
    console.log("Calling slow function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  return (
    <div style={themeStyles}>
      <h1>useMemo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <br />
      <br />
      <div>
        Double of {number} is {doubleNumber}
      </div>
    </div>
  );
}

export default UseMemo;
