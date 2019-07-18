import UsersPage from './pages/UsersPage';
import HomePage from './pages/HomePage';
import apiMethods from './apiRequests/users';

const Routes = [
  {
    component: HomePage,
    path: '/',
    exact: true
  },
  {
    component: UsersPage,
    path: '/users',
    loadInitialData: () => apiMethods.getUsers()
  }
];

export default Routes