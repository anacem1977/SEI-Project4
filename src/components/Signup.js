import axios from "axios";
import React, { Component } from "react";

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
        console.log(response)
    }

    render () {
        return (
            <div className="signup">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                <label for="username">Userame: </label>
                    <input 
                        type="text" 
                        className="inputBox" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleSignup}/>
                    <br></br>
                    <label for="password">Password: </label>
                    <input 
                        type="text" 
                        className="inputBox" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleSignup}/>
                    <br></br>
                    <label for="name">Name: </label>
                    <input 
                        type="text" 
                        className="inputBox" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleSignup}/>
                    <br></br>
                    <label for="email">e-mail: </label>
                    <input 
                        type="text" 
                        className="inputBox" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleSignup}/>
                    <br></br>
                    <input 
                        type="submit" 
                        className="submit" 
                        value="Sign Up"/>
                </form>
            </div>
        )
    }
}
export default Signup;