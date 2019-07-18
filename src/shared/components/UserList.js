import React, { Component, useContext } from 'react';
import UserContext from './context/UserContext';

const UserList = () => {
  const { users } = useContext(UserContext);
  
  return (
    <div>
      <h3>Users List</h3>
      <ul>
      {users.map((user, index) => (
        <li key={index}>{user.lastName}, {user.firstName}</li>
      ))}
      </ul>
    </div>
  )
}

export default UserList;