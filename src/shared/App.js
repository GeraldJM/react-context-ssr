import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import NavBar from './components/NavBar';
import UserContext from '../shared/components/context/UserContext';
import Routes from './Routes';

class App extends Component {
  data = isBrowser ? window.CONTEXT_VALUE : this.props.data;
  state = {
    users: this.data.users,
    filteredUsers: this.data.users,
    currentFilter: "none"
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

        user._id = this.state.users.length + 1
        this.setState({
          users: [...this.state.users, user]
        });

        if(user.isAdmin == this.state.currentFilter) {
          user._id = this.state.filteredUsers.length + 1
          this.setState({
            filteredUsers: [...this.state.filteredUsers, user]
          })
        }
      });
  }

  setFilter = (filter = "none") => {
    if(typeof filter === "boolean") {
      this.setState({
        filteredUsers: this.state.users.filter(user => user.isAdmin == filter),
        currentFilter: filter
      })
    } else {
      this.setState({
        filteredUsers: this.state.users,
        currentFilter: "none"
      })
    };
  };

  render() {
    return (
      <div>
        <NavBar />
        <div style={{margin: '0 30%'}}>
          <UserContext.Provider 
          value={
            {
              filteredUsers: this.state.filteredUsers,
              getUsers: this.getUsers, 
              addUser: this.addUser,
              setFilter: this.setFilter
            }
          }>
            {renderRoutes(Routes)}
          </UserContext.Provider>
        </div>
      </div>
    )
  }
}

export default App;