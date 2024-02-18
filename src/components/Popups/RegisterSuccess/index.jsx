import React from 'react'
import { Link } from 'react-router-dom'

import "../style.scss"

import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux'
import { resetRegistration } from '../../../reducers/FormSlice'

const RegisterSuccess = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(resetRegistration())
  }
  return (
    <div className='register-success'>
      <h2>You have registered success fully!</h2>
      <p>Please go back to login page </p>
      <Link to={"/"} onClick={handleClick}>Login</Link>
    </div>
  )
}

export default RegisterSuccess