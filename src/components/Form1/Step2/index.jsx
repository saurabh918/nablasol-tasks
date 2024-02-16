import React, { useState } from 'react';
import { FaList, FaClipboard } from 'react-icons/fa';
import './style.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decrementStep, incrementStep, updateCurrentStructure } from '../../../reducers/FormSlice';

function ContainerSelection() {
  const [selectedContainer, setSelectedContainer] = useState("list");

  const dispatch = useDispatch()

  const handleContainerClick = (containerType) => {
    setSelectedContainer(containerType);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(updateCurrentStructure(selectedContainer))
    dispatch(incrementStep())
  }

  return (
    <form onSubmit={onSubmit}>
    <div className="container-selection">
      <div
        className={`container ${selectedContainer === 'list' ? 'selected' : ''}`}
        onClick={() => handleContainerClick('list')}
      >
        <FaList className="icon" />
        <span className='structure-title'>List</span>
      </div>
      <div
        className={`container ${selectedContainer === 'board' ? 'selected' : ''}`}
        onClick={() => handleContainerClick('board')}
      >
        <FaClipboard className="icon" />
        <span className='structure-title'>Board</span>
      </div>
    </div>
    <span className='back-button' onClick={() => { dispatch(decrementStep()) }}>&lt; back</span>
    <input type='submit' value="Next" />
    </form>
  );
}

export default ContainerSelection;