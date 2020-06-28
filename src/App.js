import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path= '/' component= {Home}></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
