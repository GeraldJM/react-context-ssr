import React, { useState, useContext } from 'react';
import UserContext from './context/UserContext';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <Card style={{padding: '1rem', alignItems: 'center'}}>
      <form onSubmit={addUserAndReset}>
        <TextField
          fullWidth
          name="firstName"
          label="First Name"
          placeholder="Enter First Name"
          margin="normal"
          value={firstName} 
          onChange={updateFirstName}
        />

        <TextField
          fullWidth
          name="lastName"
          label="Last Name"
          placeholder="Enter Last Name"
          margin="normal"
          value={lastName} 
          onChange={updateLastName}
        />
        <Button style={{color: 'white', backgroundColor: '#00c25e'}} type="submit" variant="contained">Add User</Button>
      </form>
    </Card>
  )
}

export default AddMovieForm;