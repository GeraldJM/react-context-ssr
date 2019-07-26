import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Routes from '../Routes';




const NavBar = () => {
  return (
    <div style={{marginBottom: '100px'}}>
      <AppBar style={{color: 'white'}} title="UsersApp">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>UsersApp</Typography>
          {Routes.map(({path, linkText}, index) => (
            <Button key={index}color="inherit">
              <Link style={{color: 'white', textDecoration: 'none'}} to={path}>{linkText}</Link>
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;