import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import UserContext from './context/UserContext';

const UserList = () => {
  return (
    <Paper style={{marginTop: '1rem', border: '1px solid red', borderRadius: '0px'}}>
        <UserContext.Consumer>
        {({users}) => {
          return (
            <div>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Last Name</TableCell>
                    <TableCell>First Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                  </TableRow>
                ))}
                </TableBody>
              </Table>
            </div>
          )
        }}
      </UserContext.Consumer>
    </Paper>
  )
}

export default UserList;