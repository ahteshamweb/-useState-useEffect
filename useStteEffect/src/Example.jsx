import React, { useState, useEffect } from 'react';

const Example=()=> {
  const [count, setCount] = useState(0);

  // This useEffect hook will be called after every render
  useEffect(() => {
    console.log("UseEffect hook Called");
  });

const  incrementCount=()=> {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Example;