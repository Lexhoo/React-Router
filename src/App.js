import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import './App.css';
import Home from './Home'
import History from './History'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
               <ul> <NavLink exact to="/"> Accueil </NavLink> </ul>
               <ul> <NavLink to="/notre-histoire"> History </NavLink> </ul>

              <Switch>
                <Route exact path="/" component={Home} />
               
                <Route path="/notre-histoire" component={History} />
                
              </Switch>
        </div>
            </BrowserRouter>
        );
    }
}

export default App;
  