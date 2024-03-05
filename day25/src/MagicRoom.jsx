import React, { useEffect, useState } from 'react'

function MagicRoom() {

    const[toy, settoy] =useState('car');

    useEffect(()=>{
        console.log('Welcome to My Magic Room:');
        return()=>{
            console.log('Good bye to Magic Room:');
        }
    }, []);

    useEffect(()=>{
        console.log(`The toy is now in Magic Room:${toy}.`)
    }, [toy]);
  return (
    <div>

        <h1>Welcome to My Magic Room</h1>

        <button onClick={()=> settoy('doll')}>Change to Doll</button>
        <button onClick={()=> settoy('Coach Van')}>Change to Coach Van</button>
        <button onClick={()=> settoy('Airoplane')}>Change to Airo</button>
        <p>Current Toy is a: {toy}</p>
      
    </div>
  )
}

export default MagicRoom
