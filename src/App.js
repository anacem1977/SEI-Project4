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
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { FormControl } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerOrigins: [],
      beerSubstyles: [],
      allBrands: [],
      allBreweries: [],
      username: "",
      password: "",
      loggedIn: false,
      loggedUser: [],
    }
  }

      //This function records the changes being made to the fields where it is applied
    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //This function changes the state and makes the axios request with the information from the updated state
    handleSubmit = async (event) => {
      event.preventDefault();
      const userDetails = {
          username: this.state.username,
          password: this.state.password,
      };
      //console.log(userDetails);
      const response = await axios.post("http://localhost:3005/user/login", userDetails);
      console.log(response.data)
      this.setState({
          loggedUser: response.data,
          loggedIn: true
      })
  }

  getAllOrigins = async () => {
    const response = await axios.get("http://localhost:3005/origin");
    //console.log(response.data)
    this.setState({
      beerOrigins: response.data,
    })
    //console.log(this.state.beerOrigins)
  };

  getAllSubstyles = async () => {
    const response = await axios.get("http://localhost:3005/substyle");
    this.setState({
        beerSubstyles: response.data,
    })
    //console.log(this.state.beerOrigins)
  };

  getAllBrands = async () => {
    const response = await axios.get("http://localhost:3005/brand");
    this.setState({
        allBrands: response.data
    })
    //console.log(this.state.allBrands)
  };

  getAllBreweries = async () => {
    const response = await axios.get("http://localhost:3005/brewery");
    this.setState({
        allBreweries: response.data
    })
    //console.log(this.state.allBreweries)
  };

  componentDidMount = () => {
    this.getAllOrigins();
    this.getAllSubstyles();
    this.getAllBrands();
    this.getAllBreweries();
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
              <Link to = "/user/signup" className="topLinks">Signup</Link>
            </Nav.Link>
          </Nav.Item>

          <div className="login">
                {this.state.loggedIn ?
                <div>
                    <h1>Welcome!</h1>

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/origin" eventKey="link-1" className="topLinks">Beer Origin</Link>
                      </Nav.Link>
                    </Nav.Item>

                </div>
                
                : <div>
                    <Form inline onSubmit={this.handleSubmit}>
                        <Form.Label className="my-2 mr-2">Login</Form.Label>

                        <InputGroup className="mb-0 mr-sm-2">
                          <FormControl size="sm"
                              type="text"
                              name="username"
                              placeholder="Username"
                              aria-label="username"
                              aria-describedby="basic-addon1"
                              value={this.state.username} 
                              onChange={this.handleData}
                          />
                        </InputGroup>

                        <InputGroup className="mb-0 mr-sm-2">
                          <FormControl size="sm"
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            value={this.state.password} 
                            onChange={this.handleData}
                          />
                        </InputGroup>

                        <InputGroup>
                          <Button 
                            variant="light"
                            type="submit"
                            size="sm"
                          >Log In </Button>
                        </InputGroup>
                  </Form>         
                </div>
                }
            </div>
        </Nav>
        </div>

        {<Route exact path="/" render={(props) => (<HomePage logged={this.state.loggedIn}/>)} />}

        <Route path="/origin" render={(props) => (
          <Origin beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />

        <Route path="/substyle/:index" render = {(props) => ( 
          <Substyle id={props.match.params.index} substyles={this.state.beerSubstyles} beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />

        <Route path="/brand/:index" render = {(props) => (
           <Brand id={props.match.params.index} brands={this.state.allBrands} breweries={this.state.allBreweries} logged={this.state.loggedIn} />)} />

        <Route path="/brewery/:index" render = {(props) => (
           <Brewery id={props.match.params.index} brands={this.state.allBrands} breweries={this.state.allBreweries} logged={this.state.loggedIn}/>)} />

        <Route path="/user/login" render={(props) => (
        <Login logged={this.state.loggedIn} />)} />

        <Route path="/user/signup" render={() => (<Signup/>)} />
        <Route path="user/profile" render = {(props) => ( <Profile loggedUser={this.state.loggedUser} logged={this.state.loggedIn}/>)} />
          
      </div>
    );
  }
}

export default App;
