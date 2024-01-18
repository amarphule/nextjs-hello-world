import React, { useState } from "react";

const CounterTwo = () => {
    const [count, setCount] = useState(0)
  return <div>CounterTwo {count}</div>;
};

export default CounterTwo;
