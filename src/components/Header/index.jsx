import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/AuthSlice'

// import css
import "./style.scss"
import Wrapper from '../Wrapper'
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('user');
      dispatch(logout());
      navigate('/');
    }
  };
  return (
    <header className='header'>
      <Wrapper>
        <Link to="/">
          <h1>Lecture Schedular</h1>
        </Link>
        <a href="#FIXME" title='Contact us'>Contact us</a>
      </Wrapper>
    </header>
  )
}

export default Header