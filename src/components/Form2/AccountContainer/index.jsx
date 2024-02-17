import React from 'react'
import AccountTabs from '../AccountTabs'
import ProfileInfo from '../Step1'

import "./style.scss"
import { useSelector } from 'react-redux'
import BusinessInfo from '../Step2'

const AccountContainer = () => {

  const currentTab = useSelector(state => state.forms.currentAccountFormTab)
  return (
    <div className='account-container-box'>
      <AccountTabs activeTab={currentTab} />
      {currentTab === 1 && <ProfileInfo />}
      {currentTab === 2 && <BusinessInfo />}
    </div>
  )
}

export default AccountContainer