import React from 'react'
import AccountTabs from '../AccountTabs'
import ProfileInfo from '../Step1'

import "./style.scss"
import { useSelector } from 'react-redux'

const AccountContainer = () => {

  const currentTab = useSelector(state => state.forms.currentAccountFormTab)
  return (
    <div className='account-container-box'>
      <AccountTabs activeTab={2} />
      {currentTab === 1 && <ProfileInfo />}
    </div>
  )
}

export default AccountContainer