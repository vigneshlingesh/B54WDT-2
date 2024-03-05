import React  from 'react'
import { useState } from 'react'

function TodoForm({addTodo}) {
    const[value, setvalue]=useState("")

    const[value1, setvalue1] = useState("")

    const handlesubmit = e =>{
      e.preventDefault();
      if(value){
        addTodo(value);

        setvalue("");
      }
   };
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>

        <input type="text" className='todo-input-name' value = {value} placeholder='Todo Name' onChange={(e)=> setvalue(e.target.value)} />
        <input type="text"  className='todo-input-description' value={value} placeholder='Todo Description' onChange={(e) => setvalue1(e.target.value)} />

        
        <button type='submit' className='todo-btn'>Add Todo</button>      
    </form>
  )
}

export default TodoForm
