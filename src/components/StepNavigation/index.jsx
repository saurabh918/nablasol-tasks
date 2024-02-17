import React from 'react'

import "./style.scss"

const StepNavigation = ({ activeStep }) => {
  console.log(activeStep)
  const steps = [1, 2, 3, 4];

  return (
    <ul className="step-navigation">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`step-navigation-item ${activeStep - 1 === index ? 'active' : ''}`}
        >
          {step}
        </li>
      ))}
    </ul>
  );
}

export default StepNavigation