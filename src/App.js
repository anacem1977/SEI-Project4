import './App.css';
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"

import Origin from "./components/Origin";
import Substyle from "./components/Substyle";
import Brand from "./components/Brand";
import Brewery from "./components/Brewery";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import AllSubstyles from "./components/AllSubstyles";
import Glassware from "./components/Glassware"
import QuantInfo from "./components/QuantInfo"

import Nav from "react-bootstrap/Nav"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { FormControl } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import NavBar from "react-bootstrap/Navbar"

import { library } from "@fortawesome/fontawesome-svg-core";
import {faSignInAlt, faSignOutAlt, faUserPlus, faBeer, faLevelUpAlt, faEnvelope, faHeart} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

library.add(faSignInAlt, faSignOutAlt, faUserPlus, faBeer, faLevelUpAlt, faEnvelope, faHeart)

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

      //This function records the changes being made to the fields where it is applied (Login and Signup)
    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //This function changes the state and makes the axios request with the information from the updated state (LOGIN ONLY)
    handleSubmit = async (event) => {
      event.preventDefault();
      const userDetails = {
          username: this.state.username,
          password: this.state.password,
      };
      //console.log(userDetails);
      const response = await axios.post(
        // "http://localhost:3005/user/login" || 
        "https://beer-encyclopaedia.herokuapp.com/user/login", userDetails);
      //console.log(response.data);
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
    //This function changes the state and makes the axios request with the information from the updated state (SIGNUP ONLY)
    handleSignup = async (event) => {
      event.preventDefault();
      const userDetails = {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email
      };
      console.log(userDetails);
      const response = await axios.post(
        // "http://localhost:3005/user/signup"|| 
        "https://beer-encyclopaedia.herokuapp.com/user/signup", userDetails);
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
    const response = await axios.get(
      // "http://localhost:3005/origin" || 
      "https://beer-encyclopaedia.herokuapp.com/origin");
    //console.log(response.data)
    this.setState({
      beerOrigins: response.data,
    })
    //console.log(this.state.beerOrigins)
  };

  getAllSubstyles = async () => {
    const response = await axios.get(
      // "http://localhost:3005/substyle" || 
      "https://beer-encyclopaedia.herokuapp.com/substyle");
    this.setState({
        beerSubstyles: response.data,
    })
    //console.log(this.state.beerOrigins)
  };

  getAllBrands = async () => {
    const response = await axios.get(
      // "http://localhost:3005/brand" || 
      "https://beer-encyclopaedia.herokuapp.com/brand");
    this.setState({
        allBrands: response.data
    })
    //console.log(this.state.allBrands)
  };

  getAllBreweries = async () => {
    const response = await axios.get(
      // "http://localhost:3005/brewery" || 
      "https://beer-encyclopaedia.herokuapp.com/brewery");
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
      name: "",
      email: "",
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
        <header className="topTitle">
          <h1 className="mainTitle"> BEER ENCYCLOPEDIA </h1>
        </header>
          <div className="login">
                {this.state.loggedIn ?
                //NAV BAR TO DISPLAY WHEN THE USER IS LOGGED IN
                <div>
                  <NavBar className="justify-content-center navBar" defaultActiveKey="/">
                      <Nav.Item>
                        <Nav.Link>
                          <Link to = "/" className="topLinks">Home Page</Link>
                        </Nav.Link>
                      </Nav.Item>  

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/profile" eventKey="link-1" className="topLinks">Profile</Link>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/" eventKey="link-1" className="topLinks" onClick={this.signOut}>Sign Out</Link>
                      </Nav.Link>
                    </Nav.Item>
                  </NavBar>

                  {/* NEW NAV BAR WHEN USER IS LOGED IN */}
                  <NavBar className="justify-content-center newNavBar" defaultActiveKey="/">
                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/origin" eventKey="link-1" className="newTopLinks">Origin</Link>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/glassware" eventKey="link-1" className="newTopLinks">How to Serve</Link>
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link>
                        <Link to = "/quantitative" eventKey="link-1" className="newTopLinks">Beer Study Guide</Link>
                      </Nav.Link>
                    </Nav.Item>
                    
                  </NavBar>
                </div>
                
                : //NAV BAR TO DISPLAY IF THE USER IS NOT LOGGED IN
                  <div className="navBar">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Row >
                        <Col xs={2}>
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
                        </Col>

                        <Col>
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
                        </Col>

                        <Col>
                          <InputGroup>
                            <Button 
                              variant="light"
                              type="submit"
                              size="sm">
                              <FontAwesomeIcon icon="sign-in-alt" />
                            </Button>
                          </InputGroup>
                        </Col>

                        <Col>
                          <Form.Label></Form.Label>
                        </Col>

                        <Col>
                          <Form.Label>Not a member?</Form.Label>
                        </Col>

                        <Col xs="auto">
                          <FontAwesomeIcon icon="user-plus" className="icons topnav" onClick={this.signUp} />
                        </Col>
                        
                      </Form.Row>
                    </Form>
                </div>
                }

                {/* DISPLAYS ALERT WHEN USER ENTERS INCORRECT INFORMATION */}
                {this.state.wronginfo ?
                <Alert variant="danger">
                  <Alert.Heading>
                    Something went wrong!
                  </Alert.Heading>
                  <p>You entered an incorrect username or password. Please check your credentials or Sign Up</p>
                </Alert>
                : <p></p>}

                {/* DISPLAYS SIGNUP FORM AND HIDES HOMEPAGE */}
                {this.state.newUser ?
                  <div className="signup">
                    <br></br>
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
                      <br></br>
                    </form>

                  </div>
                : <p></p>}
        </div>


        {/* SHOWS HOME PAGE */}
        {this.state.showHome ?
          <Route exact path="/" render={(props) => (<HomePage logged={this.state.loggedIn}/>)} />
      : <p></p>}
        

        <Route path="/origin" render={(props) => (
          <Origin beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />

        <Route path="/glassware" render={(props) => (
          <Glassware logged={this.state.loggedIn}/>)} />

        <Route path="/quantitative" render={(props) => (
          <QuantInfo logged={this.state.loggedIn}/>)} />

        <Route path="/substyle/:index" render = {(props) => ( 
          <Substyle id={props.match.params.index} substyles={this.state.beerSubstyles} beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />

        <Route path="/brand/:index" render = {(props) => (
           <Brand id={props.match.params.index} brands={this.state.allBrands} breweries={this.state.allBreweries} substyles={this.state.beerSubstyles} beers={this.state.beerOrigins} logged={this.state.loggedIn} />)} />

        <Route path="/brewery/:index" render = {(props) => (
           <Brewery id={props.match.params.index} brands={this.state.allBrands} breweries={this.state.allBreweries} logged={this.state.loggedIn}/>)} />

        <Route path="/profile" render = {(props) => ( 
          <Profile loggedUser={this.state.loggedUser} logged={this.state.loggedIn}/>)} />

        <Route path="/substyles" render = {(props) => ( 
          <AllSubstyles substyles={this.state.beerSubstyles} beers={this.state.beerOrigins} logged={this.state.loggedIn}/>)} />            
                  
        <footer>
          <Container className="footerCont">
            <Row>
              <Col>
                <h1>BEER ENCYCLOPEDIA</h1>
                <p>By Ana Cecilia Maldonado 
                  <a href="mailto:anace_m@yahoo.com"className="footerLink"><FontAwesomeIcon icon="envelope" fixedWidth/></a>
                </p>
              </Col>
              <Col xs={3}>
                <ul><b>Resources:</b>
                  <li>
                    <a href="https://beeradvocate.com" target="_blank" rel="noreferrer" className="footerLink">beeradvocate.com</a>
                  </li>
                  <li>
                    <a href="https://craftbeer.com" target="_blank" rel="noreferrer" className="footerLink">craftbeer.com</a>
                  </li>
                </ul>
              </Col>
              <Col xs={2}>
                <ul>
                  <li><p></p></li>
                  <li>
                    <a href="https://learn.kegerator.com" target="_blank" rel="noreferrer" className="footerLink">kegerator.com</a>
                  </li>
                  <li>
                    <a href="https://wikipedia.org" target="_blank" rel="noreferrer" className="footerLink">wikipedia</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          
        </footer>

      </div>
    );
  }
}

export default App;
