// App.js
import React, { useEffect, useState } from 'react';
import Form1 from '../../components/Form1';
import { useDispatch, useSelector } from 'react-redux';
import { openForm, resetStep } from '../../reducers/FormSlice';

import "./style.scss"
import Overlay from '../../components/Overlay';
import NewProjectPopup from '../../components/Popups/NewProjectPopup';

function FormPage() {
  const isFormOpen = useSelector(state => state.forms.showForm)
  const showAddedProject = useSelector(state => state.forms.showNewProjectPopup)
  const dispatch = useDispatch()

  const handleOpenForm = () => {
    dispatch(openForm())
    dispatch(resetStep())
  }

  useEffect(() => {
    if(isFormOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    return () => {
      document.body.classList.remove("no-scroll")
    }
  },[isFormOpen])

  return (
    <div>
      <button onClick={handleOpenForm} className='add-project-btn'>Create New Project</button>
      {isFormOpen && <Form1 />}
      {isFormOpen && <Overlay />}
      <div className="random-content">
        <h2>Random Content</h2>
        <p>This is some random content. This is some random content. This is some random content. This is some random content.</p>
        <p>This is some random content. This is some random content. This is some random content. This is some random content.</p>
        <p>This is some random content. This is some random content. This is some random content. This is some random content.</p>
        <p>This is some random content. This is some random content. This is some random content. This is some random content.</p>
        <p>This is some random content. This is some random content. This is some random content. This is some random content.</p>
      </div>
      {showAddedProject && <Overlay />}
      {showAddedProject && <NewProjectPopup />}
    </div>
  );
}

export default FormPage;
