import React, {useReducer} from 'react'
import { counterReducer } from './CounterReducre';


const initialstate ={count:0};
function CounterWithReducre() {
    const[state, dispatch] = useReducer(counterReducer)
  return (

    <div>
        <h2>Counter Reducre with use state</h2>
        count:{state.count}

        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'incrementBy2'})}>+2</button>
      
    </div>
  )
}

export default CounterWithReducre
