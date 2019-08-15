import React, { useState, useContext } from 'react';
import {
  Card, 
  CardHeader, 
  CardContent,
  Grid,
  TextField, 
  Checkbox,
  Button, 
  Typography
} from '@material-ui/core';

import UserContext from './context/UserContext';

const AddMovieForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const { addUser } = useContext(UserContext);

  const updateFirstName = e => {
    setFirstName(e.target.value);
  };

  const updateLastName = e => {
    setLastName(e.target.value);
  };

  const updateIsAdmin = () => {
    setIsAdmin(!isAdmin);
  }

  const resetForm = e => {
    setFirstName('');
    setLastName('');
    setIsAdmin(false);
  };

  const addUserAndReset = e => {
    e.preventDefault();
    const newUser = { firstName, lastName, isAdmin };
    addUser(newUser);
    resetForm();
  };

  return (
    <Card style={{padding: '0 6rem'}}>
      <CardHeader title="New User" />
      <CardContent>
        <form onSubmit={addUserAndReset}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                placeholder="Enter First Name"
                margin="normal"
                value={firstName} 
                onChange={updateFirstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name"
                margin="normal"
                value={lastName} 
                onChange={updateLastName}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography>Administrator?</Typography>
            </Grid>
            <Grid item xs={8} style={{marginLeft: '1rem'}}>
              <Checkbox checked={isAdmin} onChange={updateIsAdmin} />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                style={{
                  color: 'white', 
                  backgroundColor: '#00c25e'
                }} 
                type="submit" 
                variant="contained">
                Add User
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddMovieForm;