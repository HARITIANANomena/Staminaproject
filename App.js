import React, { Component } from 'react';
import Login from './component/login/Login';
import Registre from './component/registre/Registre';
import Page_principale from './component/page_principale/Page_principale';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

class App extends Component{
  render() {
    return(

      <Router>    
        <Routes>
          <Route path="/Login" Component={Login}/>
          <Route path="/Registre" Component={Registre}/>
          <Route path="/Page_principale" Component={Page_principale}/>
        </Routes>
      </Router>

    )
  }
}

export default App;



//COMMENTAIRE A REVERIFIER

//import Header from './component/heder';
//const express = require('express');
//const path = require('path');

//const app = express();
//const port = process.env
/*
app.get('/', (req, res) => {
  res.send('Hello World');
});*/

//app.listen(3000, console.log("Serveur started en port 3000"));