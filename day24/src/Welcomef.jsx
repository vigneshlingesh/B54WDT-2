import React from 'react'
import { useState } from 'react'

function Welcomef(props) {
    const [greetings, setGreetings] = useState("hello,");
  return (
    <h1>{greetings},{props.name}</h1>
  )
}

export default Welcomef
