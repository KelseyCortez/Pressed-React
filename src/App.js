import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import CharityNav from './components/CharityNav';
import Articles from './components/Articles';
import Jumbotron from './components/Jumbotronheader';
import Suggestions  from './components/Suggestions';
// import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Home />
      <Jumbotron />
      <BrowserRouter>
      <Switch>
        {/* <Route exact path= '/' component= {Home}></Route> */}
        <Route path='/charitynav' component={CharityNav}></Route>
        <Route path='/articles' component={Articles}></Route>
        <Route path='/suggestions' component={Suggestions}></Route>

      </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
