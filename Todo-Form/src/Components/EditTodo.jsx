import React  from 'react'
import { useState } from 'react'

function EditTodo({editTodo, task})  {
    const[value, setvalue]=useState(task.task)

    const handlesubmit = e =>{  
      e.preventDefault();
      editTodo(value, task.id)
    };
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>

        <input type="text" className='todo-input' value = {value} placeholder='update Todo' onChange={(e)=> setvalue(e.target.value)} />

        
        <button type='submit' className='todo-btn'>Add Todo</button>      
    </form>
  )
}

export default EditTodo
