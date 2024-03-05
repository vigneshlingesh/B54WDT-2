import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CounterWithState from './CounterWithState'
import CounterWithReducre from './CounterWithReducre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <CounterWithState />

      <CounterWithReducre />

      
    </div>
  )
}

export default App
