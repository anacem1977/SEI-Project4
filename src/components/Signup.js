import axios from "axios";
import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: "",
            name: "",
            email: "",
        }
    }

    handleSignup = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
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
    }

    render () {
        return (
            <div className="signup">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                <InputGroup className="mb-3">
                        <FormControl
                            type="text"
                            name="username"
                            placeholder="Username"
                            aria-label="username"
                            aria-describedby="basic-addon1"
                            value={this.state.username} 
                            onChange={this.handleSignup}
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
                            onChange={this.handleSignup}
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
                            onChange={this.handleSignup}
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
                            onChange={this.handleSignup}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Button variant="outline-success"
                            type="submit"
                        >Sign Up </Button>
                    </InputGroup>

                </form>
            </div>
        )
    }
}
export default Signup;