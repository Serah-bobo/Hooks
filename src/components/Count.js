import { useState } from "react";

import React from 'react'

const Count = () => {
//initialize  variable
const [count, setCount]=useState(0);

//function to increment
const incrementCount=()=>{
    setCount(count +1);
}
  return (
    <div>
    <p>count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default Count
