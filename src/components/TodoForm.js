import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value){
            addTodo(value);
            setValue("");
        }
    }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} className='todo-input' placeholder='Add a task'/>
        <button className="todo-btn" type='submit'><FontAwesomeIcon
        className="check-icon"
        icon={faCheck}
      /></button>
    </form>
  )
}

export default TodoForm
