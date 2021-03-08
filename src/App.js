import './App.css';
import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom"

import Origins from "./components/Origins";
import Substyles from "./components/Substyles";

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

        <nav>
          {/* <Link to = "/">Home Page</Link> */}
          <Link to = "/origins">Beer Origins</Link>
          <Link to = "/substyles">Beer Susbtyles</Link>
        </nav>

        {/* <Route exact path="/" render={() => (<HomePage />)} /> */}
        <Route path="/origins" render={() => (<Origins/>)} />
        <Route path="/origins" render={() => (<Substyles/>)} />
          
      </div>
    );
  }
}

export default App;
