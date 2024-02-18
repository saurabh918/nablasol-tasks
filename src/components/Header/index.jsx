import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/AuthSlice'

// import css
import "./style.scss"
import Wrapper from '../Wrapper'
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentUser = localStorage.getItem("user")

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
          <h1>Project Manager</h1>
        </Link>
        <div className="nav-options">
        <a href="#FIXME" title='Contact us'>Contact us</a>
        {currentUser && <span onClick={handleLogout} className='logout-button'>Log out</span>}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header