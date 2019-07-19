import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




const NavBar = () => {
  return (
    <div style={{marginBottom: '100px'}}>
      <AppBar title="UsersApp">
        <Toolbar>
          <Typography variant="h6">UsersApp</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;