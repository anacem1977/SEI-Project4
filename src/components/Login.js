import axios from "axios";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: "",
        }
    }

    handleLogin = (event) => {
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
        };
        console.log(userDetails);
        const response = await axios.post("http://localhost:3005/user/login", userDetails);
        console.log(response)
    }
    render () {
        return (
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label for="username">Userame: </label>
                    <input 
                        type="text" 
                        className="inputBox" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleLogin}/>
                    <br></br>
                    <label for="password">Password: </label>
                    <input 
                        type="text" 
                        className="inputBox" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleLogin}/>
                    <br></br>
                    <input 
                        type="submit" 
                        className="submit" 
                        value="Log In"/>
                </form>
            </div>
        )
    }
}
export default Login;