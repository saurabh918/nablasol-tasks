import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClient } from '../../../reducers/ClientSlice';

import { MdClose } from 'react-icons/md';

import "./style.scss"
import { closeClientPopup } from '../../../reducers/FormSlice';

function NewClient() {
  const [newClientName, setNewClientName] = useState('');
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setNewClientName(event.target.value);
  };

  const handleSubmit = () => {
    if (newClientName.trim() !== '') {
      // Call the parent component's function to add the new client
      dispatch(addClient(newClientName));
      // Clear the input field after adding the client
      setNewClientName('');
    }
  };

  const hideClientPopup = () => {
    dispatch(closeClientPopup())
  }

  return (
    <div className='add-client-form'>
      <MdClose className="close-icon" onClick={hideClientPopup} />
      <div>
        <label htmlFor="clientName">Client Name:</label>
        <input
          type="text"
          id="clientName"
          value={newClientName}
          onChange={handleInputChange}
          placeholder="Enter client name"
        />
      </div>
      <button onClick={() => handleSubmit()} type="button">Add Client</button>
    </div>
  );
}

export default NewClient;
