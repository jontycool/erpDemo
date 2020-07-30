import React from 'react';

import Logo from '../img/logo.svg';

function Sidebar() {
  const handleClick = () => {
    alert('This is just a mockup, hence this link is inactive!');
  };

  return (
    <div className='sidebar-main'>
      <div className='logo-container'>
        <img src={Logo} alt='erpLogo' />
      </div>
      <div className='links'>
        <a href='#top' className='active' onClick={handleClick}>
          Activity Tracker
        </a>
        <a href='#top' onClick={handleClick}>
          Timesheet
        </a>
        <a href='#top' onClick={handleClick}>
          Reimbursements
        </a>
        <a href='#top' onClick={handleClick}>
          Leave Management
        </a>
        <a href='#top' onClick={handleClick}>
          Projects
        </a>
        <a href='#top' onClick={handleClick}>
          Employee Dashboard
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
