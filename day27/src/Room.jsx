import React from 'react'
import {useParams} from 'react-router-dom';

function Room() {
    let{ vicky } = useParams();
  return (
    <div>
      <h1>Welcome to Room {vicky}</h1>
    </div>
  )
}


export default Room
