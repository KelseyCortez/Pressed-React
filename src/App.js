import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import CharityNav from './components/CharityNav';
import Articles from './components/Articles';
import  Form  from './components/Form';
// import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path= '/' component= {Home}></Route>
        <Route path='/charitynav' component={CharityNav}></Route>
        <Route path='/articles' component={Articles}></Route>
        <Route path='/form' component={Form}></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
