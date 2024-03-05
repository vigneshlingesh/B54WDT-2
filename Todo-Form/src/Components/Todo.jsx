import React from 'react'


function Todo({task, deleteTodo, editTodo, togglecomleted}) {
  return (
    <div className='Todo'>
       <span> My Todos</span>
        <p  className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => togglecomleted(task.id)}> Name:  {task.task} </p>
        <p className={`${task.completed ? "completed" : "incompleted" }`} onClick={() => togglecomleted(task.id)}>Description: {task.task}</p>
        <div>
            <button onClick={() => editTodo(task.id)} className='Edit-btn'>Edit</button>
            <button onClick={() => deleteTodo(task.id)} className='Delete-btn'>Delete</button>
        </div>
      
    </div>
  )
}

export default Todo
