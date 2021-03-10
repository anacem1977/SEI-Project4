import './App.css';
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

import Origin from "./components/Origin";
import Substyle from "./components/Substyle";
import Brand from "./components/Brand";
import Brewery from "./components/Brewery";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";

import Nav from "react-bootstrap/Nav"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerOrigins: []
    }
  }

  getAllOrigins = async () => {
    const response = await axios.get("http://localhost:3005/origin");
    console.log(response.data)
    this.setState({
      beerOrigins: response.data,
    })
    console.log(this.state.beerOrigins)
  };

  componentDidMount = () => {
    this.getAllOrigins();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="mainTitle"> BEER ENCYCLOPEDIA </h1>
        </header>
        
        <div className="navBar">
        <Nav className="justify-content-center" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link>
              <Link to = "/" className="topLinks">Home Page</Link>
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link>
              <Link to = "/origin" eventKey="link-1" className="topLinks">Beer Origins</Link>
            </Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link>
              <Link to = "/user/login" className="topLinks">Login</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to = "/user/signup" className="topLinks">Signup</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </div>

        {<Route exact path="/" render={() => (<HomePage />)} />}

        <Route path="/origin" render={(props) => (
          <Origin beers={this.state.beerOrigins}/>)} />

        <Route path="/substyle/:index" render = {(props) => ( <Substyle index={props.match.params.index}/>)} />

        <Route path="/brand/:index" render = {(routerProps) => ( <Brand {...routerProps} />)} />
        <Route path="/brewery/:index" render = {(routerProps) => ( <Brewery {...routerProps}/>)} />
        <Route path="/user/login" render={() => (<Login/>)} />
        <Route path="/user/signup" render={() => (<Signup/>)} />
        <Route path="user/profile" render = {(routerProps) => ( <Profile {...routerProps}/>)} />
          
      </div>
    );
  }
}

export default App;
