import React from 'react';
import './style.scss';

const AccountTabs = ({ activeTab }) => {
  const tabStructures = {
    active1: (
      <>
        <div className='tab active'>
          <li>Tab 1</li>
        </div>
        <div className='tab'>
          <li>Tab 2</li>
        </div>
        <div className='tab'>
          <li>Tab 3</li>
        </div>
      </>
    ),
    active2: (
      <>
        <div className='tab active flex-grow'>
          <li>Tab 1</li>
          <li>Tab 2</li>
        </div>
        <div className='tab'>Tab 3</div>
      </>
    ),
    // Add more tab structures as needed
  };

  return (
    <div className="tabs">
      {tabStructures[`active${activeTab}`]}
    </div>
  );
};

export default AccountTabs;
