import React from 'react';
import UserList from '../components/UserList';
import AddUserForm from '../components/AddUserForm';

const UsersPage = () => {
  return (
    <div>
        <AddUserForm />
        <UserList />
    </div>
  )
}

export default UsersPage;