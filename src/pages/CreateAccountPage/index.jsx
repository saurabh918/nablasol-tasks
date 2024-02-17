import React from 'react'

import "./style.scss"
import AccountContainer from '../../components/Form2/AccountContainer'

const CreateAccount = () => {
  return (
    <div className='create-account-container'>
    <h2 className='create-title'>Create New Account</h2>
    <AccountContainer />
    </div>
  )
}

export default CreateAccount