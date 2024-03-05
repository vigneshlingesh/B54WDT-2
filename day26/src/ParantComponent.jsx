import React, { useState } from 'react'
import Childcomponent from './Childcomponent'

function ParantComponent() {

  const[message,setMessage] = useState("Hello message from Parant compont !")

  const[childData,setchildData] = useState('Yet to recevie some data')

  const handleDataFromChild =(data) =>{
    setchildData(data);
  }
  return (
    <div>
      <h1>Parant Component</h1>
      <p>Data from child:{childData}</p>
      <Childcomponent message ={message} ondata={handleDataFromChild} />
      
    </div>
  )
}

export default ParantComponent

