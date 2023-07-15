//import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch,Route } from 'react-router';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Route path="/signin">
  <SignIn />
      </Route>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
      </Switch> 
      );
}

export default App;
