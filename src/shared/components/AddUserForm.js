import React, { useState, useContext } from 'react';
import UserContext from './context/UserContext';

const AddMovieForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { addUser } = useContext(UserContext);

  const updateFirstName = e => {
    setFirstName(e.target.value)
  };

  const updateLastName = e => {
    setLastName(e.target.value)
  };

  const resetForm = e => {
    setFirstName('');
    setLastName('');
  };

  const addUserAndReset = e => {
    e.preventDefault();
    const newUser = { firstName, lastName };
    addUser(newUser);
    resetForm();
  };

  return (
    <form onSubmit={addUserAndReset}>
      <input type="text" name="firstName" value={firstName} onChange={updateFirstName}/>
      <input type="text" name="lastName" value={lastName} onChange={updateLastName}/>
      <input type="submit" value="Add User" />
    </form>
  )
}

export default AddMovieForm;