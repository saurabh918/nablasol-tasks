import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../../../reducers/TaskSlice';

function TaskForm() {
  // State to manage tasks
  const tasks = useSelector(state => state.tasks.taskItems)
  const [newTask, setNewTask] = useState('');

  const dispatch = useDispatch()

  // Function to handle input change
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle form submission
  const handleAdd = () => {
    if (newTask.trim() !== '') {
      addTask(newTask)
      setNewTask('');
    }
  };

  // Function to handle task deletion
  const handleDeleteTask = (index) => {
    dispatch(removeTask(index))
  };

  return (
    <form>
    <div className="task-form">
      <h2>Tasks</h2>
      {/* Form to add new task */}
      <div className='add-task-container'>
        <input
          type="text"
          id="newTask"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
      
      {/* List of tasks */}
      <ul className="task-list">
        {tasks && tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span>{task}</span>
            <MdClose
              className="delete-icon"
              onClick={() => handleDeleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
    </form>
  );
}

export default TaskForm;
