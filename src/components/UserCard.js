import React from 'react';
import Popup from 'reactjs-popup';
import UserDetails from './UserDetails';

import User from '../img/user.svg';

function UserCard({ user }) {
  return (
    <Popup
      trigger={
        <div className='userCard'>
          <img src={User} width='50' height='50' alt={user.id} />
          <h4>Name: {user.real_name}</h4>
          <h4>ID: {user.id}</h4>
        </div>
      }
      modal
      closeOnDocumentClick
    >
      {(close) => <UserDetails user={user} onClick={close} />}
    </Popup>
  );
}

export default UserCard;
