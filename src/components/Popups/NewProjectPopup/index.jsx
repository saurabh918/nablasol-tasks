import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClose } from 'react-icons/md';

import "../style.scss"
import { hideNewProjectPopup } from '../../../reducers/FormSlice';

const NewProjectPopup = () => {
  const { tempFormData, currentStructure, selectedOption } = useSelector(state => state.forms);
  const { project, client, date } = tempFormData;
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(hideNewProjectPopup())
  }
  return (
    <div className='project-info'>
     <h2>Added New Form</h2>
     <p>Name: {project} </p> 
     <p>Client: {client}</p>
     <p>Duration: {date}</p>
     <p>View: {currentStructure}</p>
     <p>Access to: {selectedOption}</p>
     <MdClose onClick={handleClose} />
    </div>
  )
}

export default NewProjectPopup