import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = () => {
    if(inputValue != ''){
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }
  
  const handleClick = (event) => {
    event.target.parentNode.parentNode.style="outline-style:solid;outline-color:rgb(54, 114, 136);text-decoration:line-through;"
    event.currentTarget.style = "background-color:grey;"
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
      <div className='todo_app'>
        <div className='add_todo'>
          <h1>Todo List App</h1>
          <div className='todo_list'>
            <input value={inputValue} onChange={handleInputChange} placeholder='Entrer une tâche' />
            <button id='ajouter' onClick={addTask}>Ajouter</button>  
          </div>
        </div>

        <div className='todo_container'>
          <h1>Todo List</h1>
          <ul>
            {tasks.map((task, i) => (
              <div className='todo'>
                  <div className='todo_title'>
                <li key={i}>
                    {task}
                </li>
                  </div>
                  <div className='todo_btn'>
                    <button onClick={handleClick}>Done</button>
                    <button id='delete' onClick={() => deleteTask(i)}>Delete</button>
                  </div>
                
              </div>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default TodoList;
