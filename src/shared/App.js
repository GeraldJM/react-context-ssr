import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import UserContext from '../shared/components/context/UserContext';
import Routes from './Routes';


class App extends Component {
  users = isBrowser ? window.CONTEXT_VALUE : this.props.data;
  state = {
    users: this.users
  }

  getUsers = () => {
    axios.get('http://localhost:3000/users')
    .then(res => this.setState({users: res.data}))
    .catch(err => console.log(err));
  }

  addUser = (user) => {
    axios.post('http://localhost:3000/users', user)
      .then((res) => {
        if(!res.data.status) {
          console.log('error', res.data)
          return;
        }

        this.setState({
          users: [
            ...this.state.users, 
            {
              _id: this.state.users.length + 1,
              firstName: user.firstName,
              lastName: user.lastName
            }
          ]
        });
      });
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <UserContext.Provider 
        value={
          {
            users: this.state.users, 
            getUsers: this.getUsers, 
            addUser: this.addUser
          }
        }>
          {renderRoutes(Routes)}
        </UserContext.Provider>
      </div>
    )
  }
}

export default App;