import React from 'react'
import { Route, Routes } from 'react-router-dom'

import PrivateRoutes from '../PrivateRoutes'
import Login from '../../pages/LoginPage'
import ErrorPage from '../../pages/ErrorPage'
import FormPage from '../../pages/FormPage'

const RouterComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/forms' element={<FormPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
    </Routes>
  ) 
}

export default RouterComponent