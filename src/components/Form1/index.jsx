import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import "./style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { closeForm, incrementStep } from '../../reducers/FormSlice';
import Step4 from './Step4';
import StepNavigation from '../StepNavigation';


function Form1() {
  const currentStep = useSelector(state => state.forms.currentStep)

  const dispatch = useDispatch()

  const handleCloseForm = () => {
    dispatch(closeForm())
  };

  return (
    <div className='form-one'>
      <MdClose className="close-icon" onClick={handleCloseForm} />
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
      <StepNavigation activeStep={currentStep} />
    </div>
  );
}

export default Form1;
