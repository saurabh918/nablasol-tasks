import React, { useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCurrentAccTab } from '../../../../reducers/FormSlice';
import { RiArrowRightSLine } from "react-icons/ri";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const currentStep = useSelector(state => state.forms.currentAccountFormTab)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    // if (!formData.firstName.trim()) {
    //   newErrors.firstName = 'First Name is required';
    // }
    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = 'Last Name is required';
    // }
    // if (!formData.email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = 'Email is invalid';
    // }
    // if (!formData.phoneNumber.trim()) {
    //   newErrors.phoneNumber = 'Phone Number is required';
    // }
    // if (!formData.password.trim()) {
    //   newErrors.password = 'Password is required';
    // }
    // if (formData.password !== formData.confirmPassword) {
    //   newErrors.confirmPassword = 'Passwords do not match';
    // }
    // setErrors(newErrors);
    // If there are no errors, you can proceed with form submission
    // For now, we'll just log the form data
    if (Object.keys(newErrors).length === 0) {
      dispatch(incrementCurrentAccTab())
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-group">
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='Input Your First Name'
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder='Input Your Last Name'
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder='Input Your Email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder='Input Your Phone Number'
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Create Password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
      </div>
      <div className="account-step-navigation">
        <input type="button" className={`prev-step-btn ${currentStep===1 ? "hide": ""}`} value="< Previous Step" />
        <input type="submit" className={`${currentStep===1 ? 'shrink-btn':" "}`} value="Next Step" />
        <RiArrowRightSLine className='right-arrow-icon' />
        </div>
    </form>
  );
};

export default ProfileForm;
