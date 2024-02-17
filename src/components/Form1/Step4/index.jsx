import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../../../reducers/TaskSlice';
import { decrementStep, incrementStep } from '../../../reducers/FormSlice';

function TaskForm() {
  const tasks = useSelector(state => state.tasks.taskItems);
  const [newTask, setNewTask] = useState('');
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(removeTask(index));
  };

  const handleCheckboxChange = (index) => {
    const newCheckedTasks = [...checkedTasks];
    if (newCheckedTasks.includes(index)) {
      newCheckedTasks.splice(newCheckedTasks.indexOf(index), 1);
    } else {
      newCheckedTasks.push(index);
    }
    setCheckedTasks(newCheckedTasks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkedTasks.length === 0) {
      setError('Please select at least one task');
    } else {
      dispatch(incrementStep());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="task-form">
        <h2>Tasks</h2>
        <div className='add-task-container'>
          <label htmlFor="newTask" className='add-task-label'>Add a task</label>
          <div className='add-task-fields'>
          <input
            type="text"
            id="newTask"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Add a task"
          />
          <button type="button" className='add-task-button' onClick={handleAdd}>Add</button>
          </div>
        </div>
        <ul className="task-list">
          {tasks && tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={checkedTasks.includes(index)}
                onChange={() => handleCheckboxChange(index)}
              />
              <span>{task}</span>
              <MdClose
                className="delete-icon"
                onClick={() => handleDeleteTask(index)}
              />
            </li>
          ))}
        </ul>
        {error && <p className="error">{error}</p>}
        <div className='step-navigation'>
          <span className='back-button' onClick={() => { dispatch(decrementStep()) }}>&lt; Back</span>
          <input type='submit' value="Next" />
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
