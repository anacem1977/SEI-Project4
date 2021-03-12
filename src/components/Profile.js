import React, {Component} from "react";
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import { FormControl } from "react-bootstrap";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { Redirect } from "react-router-dom"

import HomePage from "./HomePage"

class Profile extends Component {
    constructor(props) {
        super(props)
        //console.log(props.loggedUser)
        this.state = {
            deletedUser: "pending",
            password: this.props.loggedUser.password,
            name: this.props.loggedUser.name,
            email: this.props.loggedUser.email
        }
    }

    handleData = (event) => {
        //console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteUser = async (event) => {
        event.preventDefault();
        //console.log(this.props.loggedUser.id)
        const response = await axios.delete(`http://localhost:3005/user/${this.props.loggedUser.id}`);
        //console.log(response.data)
        if (response.data === "successfully deleted") {
            this.setState({
                deletedUser: "yes",
                loggedIn: false,
                username: "",
                password: "",
                name: "",
                email: "",
            })
            window.location.reload();
        } else {
            this.setState({
                deletedUser: "no"
            })
        } 
        //console.log(this.state.loggedIn)
    }

    editProfile = async (event) => {
        event.preventDefault();
        const userDetails = {
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
          };
        //   console.log(userDetails)
        const response = await axios.put(`http://localhost:3005/user/${this.props.loggedUser.id}`, userDetails)
          if (response.status === 200) {
            this.setState({
                updatedUser: true,
            })
        } //console.log(this.state.updatedUser)
    }

    render() {
        return(
            <div className="profile">
                <h1>Profile</h1>
                <form>
                <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl readOnly
                            defaultValue= {this.props.loggedUser.username}
                            aria-label="username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type= "password"
                            name="password"
                            placeholder="password"
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            value= {this.state.password}
                            onChange={this.handleData}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Your name</InputGroup.Text>
                        </InputGroup.Prepend>
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
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">e-mail</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value= {this.state.email}
                            aria-label="email"
                            aria-describedby="basic-addon1"
                            type="email"
                            name="email"
                            onChange={this.handleData}
                        />
                    </InputGroup>
                    </form>

                    <InputGroup>
                        <Button variant="outline-success" onClick={this.editProfile}>Edit</Button>
                        <Button variant="outline-danger" onClick={this.deleteUser}>Delete</Button>
                    </InputGroup>

                    {this.state.deletedUser === "yes" ? 
                          <Redirect exact path="/" render ={(props) => (<HomePage logged={this.state.loggedIn}/>)}>
                          </Redirect>
                    : <p></p>
                    }

                    {this.state.deletedUser === "no" ?
                        <Alert variant="danger">
                        <Alert.Heading>
                            Something went wrong!
                        </Alert.Heading>
                        <p>We were not able to delete your Profile. Please try again.</p>
                    </Alert> 
                    : <p></p>    
                    }

                    {this.state.updatedUser ?
                        <Alert variant="success">
                        <Alert.Heading>
                            Awesome
                        </Alert.Heading>
                        <p>Your profile was updated successfully!</p>
                    </Alert> 
                    : <p></p>}
            </div>
        )
    }
}

export default Profile;

