import './App.css';
import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom"

import Origin from "./components/Origin";
import Substyle from "./components/Substyle";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1> BEER ENCICLOPEDIA </h1>
        <h2> A LOT OF INFORMATION ABOUT BEERS </h2>
        
        <nav>
          {/* <Link to = "/">Home Page</Link> */}
          <Link to = "/origin">Beer Origins</Link>
          <Link to = "/substyle">Beer Susbtyles</Link>
          <Link to = "/user/login">Login</Link>
        </nav>

        {/* <Route exact path="/" render={() => (<HomePage />)} /> */}
        <Route path="/origin" render={() => (<Origin/>)} />
        <Route path="/substyle" render={() => (<Substyle/>)} />
        <Route path="/user/login" render={() => (<Login/>)} />
          
      </div>
    );
  }
}

export default App;
