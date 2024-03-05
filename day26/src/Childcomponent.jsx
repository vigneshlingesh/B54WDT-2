import React from 'react'
import Grandchild from './Grandchild'

function Childcomponent(props) {
    const sendDataToParant =() =>{
        props.ondata('some data recived from child component')
    }
  return (
    <div>
      <h3>This Child Component</h3>
      <Grandchild message = {props.message}/>
      <button onClick={sendDataToParant}>Click</button>
    </div>
  )
}

export default Childcomponent
