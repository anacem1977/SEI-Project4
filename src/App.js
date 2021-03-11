import './App.css';
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

import Origin from "./components/Origin";
import Substyle from "./components/Substyle";
import Brand from "./components/Brand";
import Brewery from "./components/Brewery";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";

import Nav from "react-bootstrap/Nav"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { FormControl } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';

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
      wronginfo:"",
      newUser: false,
      showHome: true,
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
      console.log(response.data);
      if (response.data === null) {
        this.setState ({
          wronginfo : true,
          loggedIn: false,
          loggedUser: [],
          username: "",
          password: "",
        })
      } else {
        this.setState({
          loggedUser: response.data,
          loggedIn: true,
          wronginfo: false,
        })
      }
  }

  handleSignup = async (event) => {
    event.preventDefault();
    const userDetails = {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email
    };
    console.log(userDetails);
    const response = await axios.post("http://localhost:3005/user/signup", userDetails);
    console.log(response.data)
    this.setState({
        loggedIn: true,
        loggedUser: response.data,
        wronginfo: false,
        newUser: false,
        showHome: true,
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

  signOut = () => {
    this.setState({
      loggedIn: false,
      loggedUser: [],
      username: "",
      password: "",
    })
  }

  signUp = () => {
    this.setState({
      newUser: true,
      showHome: false,
    })
    console.log(this.state.newUser)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="mainTitle"> BEER ENCYCLOPEDIA </h1>
        </header>
          <div className="login">
                {this.state.loggedIn ?
                //NAV BAR TO DISPLAY WHEN THE USER IS LOGGED IN
                <div className="navBar">
                  <Nav className="justify-content-center" defaultActiveKey="/">
                      <Nav.Item>
                        <Nav.Link>
                          <Link to = "/" className="topLinks">Home Page</Link>
                        </Nav.Link>
                      </Nav.Item>  

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/origin" eventKey="link-1" className="topLinks">Beers!</Link>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/profile" eventKey="link-1" className="topLinks">Profile</Link>
                      </Nav.Link>
                    </Nav.Item>
                    </Nav>

                    <Button variant="warning" onClick={this.signOut}>
                      <Link to ="/">Sign Out</Link>
                    </Button>

                    <h5>Welcome!</h5>
                </div>
                
                : //NAV BAR TO DISPLAY IF THE USER IS NOT LOGGED IN
                  <div className="navBar">
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

                        <Button variant="outline-success" onClick={this.signUp}>
                          {/* <Link to = "/user/signup">Signup</Link> */}
                          SignUp
                        </Button>
                  </Form> 
                </div>
                }

                {this.state.wronginfo ? 
                <Alert variant="danger">
                  <Alert.Heading>
                    Something went wrong!
                  </Alert.Heading>
                  <p>You entered an incorrect username or password. Please check your credentials or Singup</p>
                </Alert>
                : <p></p>}

                {this.state.newUser ?
                  <div className="signup">
                    <h1> Sign Up </h1>
                    <form onSubmit={this.handleSignup}>
                      <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="username"
                            placeholder="Username"
                            aria-label="username"
                            aria-describedby="basic-addon1"
                            value={this.state.username} 
                            onChange={this.handleData}
                        />
                      </InputGroup>
                    
                      <InputGroup className="mb-3">
                        <FormControl
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            value={this.state.password} 
                            onChange={this.handleData}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            value={this.state.name} 
                            onChange={this.handleData}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <FormControl
                            type="email"
                            name="email"
                            placeholder="Your e-mail"
                            aria-label="e-mail"
                            aria-describedby="basic-addon1"
                            value={this.state.email} 
                            onChange={this.handleData}
                        />
                      </InputGroup>

                      <InputGroup>
                        <Button variant="outline-success"
                            type="submit"
                        >Sign Up </Button>
                      </InputGroup>
                    </form>

                  </div>
                : <p></p>}
        </div>
        {this.state.showHome ?
          <Route exact path="/" render={(props) => (<HomePage logged={this.state.loggedIn}/>)} />
      : <p></p>}
        

        <Route path="/origin" render={(props) => (
          <Origin beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />

        <Route path="/substyle/:index" render = {(props) => ( 
          <Substyle id={props.match.params.index} substyles={this.state.beerSubstyles} beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />

        <Route path="/brand/:index" render = {(props) => (
           <Brand id={props.match.params.index} brands={this.state.allBrands} breweries={this.state.allBreweries} substyles={this.state.beerSubstyles} beers={this.state.beerOrigins} logged={this.state.loggedIn} />)} />

        <Route path="/brewery/:index" render = {(props) => (
           <Brewery id={props.match.params.index} brands={this.state.allBrands} breweries={this.state.allBreweries} logged={this.state.loggedIn}/>)} />

        <Route path="/profile" render = {(props) => ( 
          <Profile loggedUser={this.state.loggedUser} logged={this.state.loggedIn}/>)} />
          
      </div>
    );
  }
}

export default App;
