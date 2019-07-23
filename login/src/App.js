import React from 'react';
import Form from './components/LoginForm/LoginForm';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute/PrivateRoute';
import LoginForm from './components/LoginForm/LoginForm';
import GetInfo from './components/GetInfo/GetInfo';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='container'>
          <Link to='/'>Login</Link>
          <Link to='/profile'>Profile</Link>
          <Route exact path='/' component={LoginForm} />
          <PrivateRoute exact path='/profile' component={Profile} />
        </header>
      </div>
    </Router>
  );
}

export default App;
