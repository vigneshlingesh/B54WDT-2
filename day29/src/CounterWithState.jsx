import React, { useState } from 'react'

function CounterWithState() {

    const[count, setCount] = useState(0);

    const increment =() => setCount(count + 1);
    const decrement =() => setCount(count - 1);
    const incrementBy2 =() => setCount(count + 2);
  return (
    <div>

        <h2>Count with use state</h2>

        count:{count}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={incrementBy2}>+2</button>
      
    </div>
  );
}

export default CounterWithState