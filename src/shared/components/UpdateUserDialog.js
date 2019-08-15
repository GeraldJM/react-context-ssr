import React, { useContext } from 'react';
import { Dialog, Paper, Grid, Typography, Button, TextField, Checkbox } from '@material-ui/core';

import UserContext from './context/UserContext';

const UpdateUserDialog = () => {
  const { 
    dialogOpened,
    handleChange,
    updateUser,
    userToUpdate: {
      firstName,
      lastName,
      isAdmin
    }
  } = useContext(UserContext);


  return (
    <Dialog open={dialogOpened}>
      <Paper style={{padding: '3rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            fullWidth
            name="firstName"
            label="First Name"
            placeholder="Enter First Name"
            margin="normal"
            value={firstName}
            onChange={handleChange}
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
            onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography>Administrator?</Typography>
          </Grid>
          <Grid item xs={9} style={{marginLeft: '1rem'}}>
            <Checkbox name="isAdmin" checked={isAdmin} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button
            fullWidth
            style={{
              color: 'white',
              backgroundColor: '#00c25e'
            }}
            onClick={updateUser}>
              Update
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  )
}

export default UpdateUserDialog;