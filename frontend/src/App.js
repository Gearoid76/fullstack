import React, { Fragment, useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.css';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



//components

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";


 //import Header from "./components/Header";
 //import InputUser from "./components/InputUser";
 //import ListUsers from './components/ListUsers';
import { UsersContextProvider } from './context/usersContext';

toast.configure();

function App() { 
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:4000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json()
      parseRes === true ? setIsAuthenticated(true): setIsAuthenticated(false);
    } catch (err) {
        console.error(err.message);
    }
  }
  
  
  useEffect(() => {
    isAuth()
  })

  return (
   <UsersContextProvider> 
      <Fragment>
      <Router>
          <div className="container">
              <Switch>
                <Route exact path="/login" render={props =>  !isAuthenticated ? <Login {...props} setAuth={setAuth}/> : <Redirect to="/dashboard" />} />
                <Route exact path="/register" render={props =>!isAuthenticated ?  <Register {...props} setAuth={setAuth}/> : <Redirect to="/login" />} />
                <Route exact path="/dashboard" render={props =>isAuthenticated ?  <Dashboard  {...props} setAuth={setAuth}/> : <Redirect to="login" />} />
            </Switch>
          </div>
      </Router>          
      </Fragment>
   </UsersContextProvider>    
  );
}

export default App;