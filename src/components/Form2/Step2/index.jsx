import React from 'react'

const BusinessInfo = () => {
  return (
    <>
      <span className='step-counter'>Step 2</span>
      <h2 className='profile-form-title'>Your Profile</h2>
      <p className="instructions">
        Enter the login information for your account. You will be able to create additional users after registering.
      </p>
      <BusinessForm />
    </>
  )
}

export default BusinessInfo