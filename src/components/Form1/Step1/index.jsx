import React, { useState } from 'react';
import NewClient from '../NewClient';
import { useDispatch, useSelector } from 'react-redux';
import { decrementStep, incrementStep, showNewClientPopup } from '../../../reducers/FormSlice';
import StepNavigation from '../../StepNavigation';


function Step1() {
  const [formData, setFormData] = useState({
    projectName: '',
    client: '',
    startDate: '',
    endDate: ''
  });

  const [errors, setErrors] = useState({
    projectName: '',
    client: '',
    startDate: '',
    endDate: ''
  });

  const showClientPopup = useSelector(state => state.forms.showNewClientForm)

  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error when the user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    // Validation
    if (formData.projectName.trim() === '') {
      newErrors.projectName = 'Project name is required';
    }
    if (formData.client.trim() === '') {
      newErrors.client = 'Client is required';
    }
    if (formData.startDate.trim() === '') {
      newErrors.startDate = 'Start date is required';
    }
    if (formData.endDate.trim() === '') {
      newErrors.endDate = 'End date is required';
    }
    // You can add more complex validation here if needed

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, proceed with form submission
      dispatch(incrementStep())
    }

  };

  const showAddClient = () => {
    dispatch(showNewClientPopup())
  }

  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <h2>Create a Project</h2>
      <div>
        <label htmlFor="projectName">Project name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          placeholder='Enter project name here'
          value={formData.projectName}
          onChange={handleInputChange}
        />
        {errors.projectName && <div className="error">{errors.projectName}</div>}
      </div>
      <div>
        <label htmlFor="client">Client:</label>
        <div className='client-fields'>
        <select
          id="client"
          name="client"
          value={formData.client}
          onChange={handleInputChange}
        >
          <option value="">Select a client</option>
          {/* You can dynamically generate options here if needed */}
          <option value="client1">Client 1</option>
          <option value="client2">Client 2</option>
          <option value="client3">Client 3</option>
        </select>
        <button type='button' onClick={() => showAddClient()}>+ new client</button>
        { showClientPopup && <NewClient />}
        </div>
        {errors.client && <div className="error">{errors.client}</div>}
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
        {errors.startDate && <div className="error">{errors.startDate}</div>}
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
        {errors.endDate && <div className="error">{errors.endDate}</div>}
      </div>
      <div className='step-navigation'>
      <span className='back-button' onClick={() => { dispatch(decrementStep()) }}>&lt; back</span>
      <input type="submit" value="Next" />
      </div>
    </form>
    </>
  );
}

export default Step1;
