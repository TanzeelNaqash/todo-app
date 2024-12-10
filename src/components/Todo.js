import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
    
  return (
    <div className="todo">
      <p className={`${task.completed ? "completed" : "incomplete"}`} onClick= {()=> toggleComplete(task.id)}>{task.task}</p>
      <FontAwesomeIcon
        className="edit-icon"
        icon={faPenToSquare}
        onClick={() => editTodo(task.id)}
      />
      <FontAwesomeIcon
        className="delete-icon"
        icon={faTrash}
        onClick={() => deleteTodo(task.id)}
      />
    </div>
  );
};

export default Todo;
