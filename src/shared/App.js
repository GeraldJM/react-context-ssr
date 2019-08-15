import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';

import NavBar from './components/NavBar';
import UserContext from '../shared/components/context/UserContext';
import Routes from './Routes';
import UpdateUserDialog from './components/UpdateUserDialog';

class App extends Component {
  data = isBrowser ? window.CONTEXT_VALUE : this.props.data;
  state = {
    users: this.data.users,
    filteredUsers: this.data.users,
    currentFilter: "none",
    dialogOpened: false,
    userToUpdate: {
      firstName: '',
      lastName: '',
      isAdmin: false
    }
  }

  getUsers = () => {
    axios.get('http://localhost:3000/users')
    .then(res => this.setState({users: res.data}))
    .catch(err => console.log(err));
  }

  addUser = (user) => {
    axios.post('http://localhost:3000/users', user)
      .then(res => {
        if(res.data.error) {
          console.log('error', res.data)
          return;
        }

        user._id = this.state.users.length + 1
        this.setState({
          users: [...this.state.users, user]
        });

        if(user.isAdmin == this.state.currentFilter || this.state.currentFilter == "none") {
          user._id = this.state.filteredUsers.length + 1
          this.setState({
            filteredUsers: [...this.state.filteredUsers, user]
          })
        }
      });
  }

  openDialog = (user) => {
    this.setState({
      dialogOpened: true,
      userToUpdate: {...user}
    })
  }

  closeDialog = () => {
    this.setState({
      dialogOpened: false,
      userToUpdate: {
        firstName: '',
        lastName: '',
        isAdmin: false
      }
    })
  }

  handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const { userToUpdate } = this.state;
    
    type == "checkbox"
      ? this.setState({
        userToUpdate: {
          ...userToUpdate,
          [name]: checked
        }
      })
      : this.setState({
        userToUpdate: {
          ...userToUpdate,
          [name]: value
        }
      })
  }

  updateUser = () => {
    const { userToUpdate, currentFilter, filteredUsers, users } = this.state;
    const { _id } = userToUpdate;

    axios.put(`http://localhost:3000/users/${_id}`, userToUpdate)
      .then(res => {
        const userIndex = users.indexOf(users.find(u => u._id == _id));
        const { updatedUser } = res.data;
        const allUsers = this.getListWithoutItem(users, updatedUser._id)
        allUsers.splice(userIndex, 0, updatedUser)
        const updatedAllUsers = allUsers;
        this.setState({
          users: updatedAllUsers
        });

        const userIndexInFilter = filteredUsers.indexOf(filteredUsers.find(u => u._id == _id));
        const allfilteredUsers = this.getListWithoutItem(filteredUsers, updatedUser._id);
        // add updatedUser to current filtered list if the user did not change isAdmin or there is no filter
        if(updatedUser.isAdmin == currentFilter || currentFilter == "none") {
          allfilteredUsers.splice(userIndexInFilter, 0, updatedUser);
          const updatedFilteredUsers = allfilteredUsers;
          this.setState({
            filteredUsers: updatedFilteredUsers
          })
        } else {
          // delete updatedUser from current filtered list of the user changed isAdmin
          this.setState({
            filteredUsers: allfilteredUsers
          })
        }

        this.closeDialog();
      })
  }

  getListWithoutItem = (list, itemId) => {
    return list.filter(item => item._id != itemId);
  }

  deleteUser = (user) => {
    axios.delete(`http://localhost:3000/users/${user._id}`)
      .then(res => {
        if(res.error) {
          console.log(error);
          return;
        }

        this.setState({
          users: this.state.users.filter(u => u._id != user._id)
        })

        if(user.isAdmin == this.state.currentFilter || this.state.currentFilter == "none") {
          this.setState({
            filteredUsers: this.state.filteredUsers.filter(u => u._id != user._id)            
          })
        }
      })
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
          value={{
              filteredUsers: this.state.filteredUsers,
              getUsers: this.getUsers,
              addUser: this.addUser,
              openDialog: this.openDialog,
              closeDialog: this.closeDialog,
              dialogOpened: this.state.dialogOpened,
              userToUpdate: this.state.userToUpdate,
              handleChange: this.handleChange,
              updateUser: this.updateUser,
              deleteUser: this.deleteUser,
              setFilter: this.setFilter
          }}>
            {renderRoutes(Routes)}
            <UpdateUserDialog />
          </UserContext.Provider>
        </div>
      </div>
    )
  }
}

export default App;