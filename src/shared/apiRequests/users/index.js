import axios from 'axios';

const getUsers = async () => {
  return axios.get('http://localhost:3000/users')
    .then(res => res.data)
    .catch(err => console.log(err));
}

const getAdmins = async () => {
  return axios.get('http://localhost:3000/users/admins')
    .then(res => res.data)
    .catch(err => console.log(err));
}

const apiMethods = {
  getUsers,
  getAdmins
}

export default apiMethods;