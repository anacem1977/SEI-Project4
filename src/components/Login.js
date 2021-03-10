import axios from "axios";
import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import {Redirect} from "react-router"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: "",
            loggedIn: [],
        }
    }

    //This function records the changes being made to the fields where it is applied
    handleLogin = (event) => {
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
        console.log(userDetails);
        const response = await axios.post("http://localhost:3005/user/login", userDetails);
        console.log(response.data)
        this.setState({
            loggedIn: response.data,
        })
        return this.state.loggedIn ? (
            <p>Welcome</p>
            )
            : (
                <p>You are not logged in</p>
            )
    }


    componentDidUpdate = () => {
        console.log(this.state.loggedIn)
    }
    
    render () {
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="username"
                            placeholder="Username"
                            aria-label="username"
                            aria-describedby="basic-addon1"
                            value={this.state.username} 
                            onChange={this.handleLogin}
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
                            onChange={this.handleLogin}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Button variant="outline-success"
                            type="submit"
                        >Log In </Button>
                    </InputGroup>
                </form>
            </div>
        )
    }
}
export default Login;