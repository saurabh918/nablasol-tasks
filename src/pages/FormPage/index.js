// App.js
import React, { useState } from 'react';
import Form1 from '../../components/Form1';
import { useDispatch, useSelector } from 'react-redux';
import { openForm, resetStep } from '../../reducers/FormSlice';

function FormPage() {
  const isFormOpen = useSelector(state => state.forms.showForm)
  const dispatch = useDispatch()

  const handleOpenForm = () => {
    dispatch(openForm())
    dispatch(resetStep())
  }

  return (
    <div>
      <button onClick={handleOpenForm}>Fill the Form</button>
      {isFormOpen && <Form1 />}
    </div>
  );
}

export default FormPage;
