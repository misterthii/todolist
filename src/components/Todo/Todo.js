import React,{useState} from 'react'
import TodoForm from './NewTodoForm'



function Todo({ todos, completeTodo, removeTodo, updateTodo}) {
  const [edit,setEdit]=useState({
    id:null,
    value:''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };
  
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'complete' : 'not-complete'} key={index}>
      <div key={todo.id}>
        {todo.text}
      </div>
      <div >
        <button onClick={() => removeTodo(todo.id)} className='btn-todo'>🚮</button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })} className='btn-todo'
        >✏️</button>
        <button onClick={() => completeTodo(todo.id)}>👌</button>
      </div>
    </div>
  ));
};

export default Todo