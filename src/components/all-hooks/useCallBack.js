import React, { useState, useEffect, useCallback } from "react";

function UseCallBack() {
  const [count, setCount] = useState(0);

  //   useCallback is used to memoize functions so that they are not recreated every time the component re-renders.
  //   It is similar to useMemo but for functions instead of values.
  //   It is used to optimize performance.
  //   It is also used to prevent unnecessary re-renders of child components.
  //   A component re-renders when its props or state change.
  //  If a child component is wrapped in a useCallback hook, it will only re-render when the props or state change and not when the parent component re-renders.
  const increment = useCallback(() => {
    console.log("useCallback");
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log("useEffect");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>useCallback</h1>
      <h4>Count: {count}</h4>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseCallBack;
