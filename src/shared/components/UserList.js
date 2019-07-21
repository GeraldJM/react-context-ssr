import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import UserContext from './context/UserContext';

const UserList = () => {
  return (
    <Paper style={{marginTop: '1rem', borderRadius: '0px'}}>
        <UserContext.Consumer>
        {({filteredUsers, setFilter}) => {
          return (
            <div style={{padding: '0.2rem'}}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Button onClick={() => setFilter(false)} fullWidth variant="contained">Standard Users</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button onClick={() => setFilter(true)} fullWidth variant="contained">Admins</Button>
                </Grid>
                <Grid item xs={4}>
                  <Button onClick={setFilter} fullWidth variant="contained">All</Button>
                </Grid>
                <Grid item xs={12}>
                  <Table style={{border: '1px solid red'}}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Last Name</TableCell>
                        <TableCell>First Name</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredUsers.map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                      </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </div>
          )
        }}
      </UserContext.Consumer>
    </Paper>
  )
}

export default UserList;