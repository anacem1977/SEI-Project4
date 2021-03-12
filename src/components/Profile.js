import React, {Component} from "react";
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"
import { FormControl } from "react-bootstrap";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { Redirect } from "react-router-dom"
import Form from "react-bootstrap/Form"

import HomePage from "./HomePage"

class Profile extends Component {
    constructor(props) {
        super(props)
        console.log(props.loggedUser)
        this.state = {
            deletedUser: false,
            password: this.props.loggedUser.password,
            name: this.props.loggedUser.name,
            email: this.props.loggedUser.email
        }
    }

    handleData = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    deleteUser = async (event) => {
        event.preventDefault();
        console.log(this.props.loggedUser.id)
        const response = await axios.delete(`http://localhost:3005/user/${this.props.loggedUser.id}`);
        console.log(response.data)
        if (response.data === "successfully deleted") {
            this.setState({
                deletedUser: true,
                loggedIn: false,
            })
        } console.log(this.state.loggedIn)
    }

    editProfile = async (event) => {
        event.preventDefault();
        const userDetails = {
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
          };
          console.log(userDetails)
        const response = await axios.put(`http://localhost:3005/user/${this.props.loggedUser.id}`, userDetails)
          console.log(response.data)
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
                            value= {this.props.loggedUser.password}
                            aria-label="password"
                            aria-describedby="basic-addon1"
                            type= "password"
                            onChange={this.handleData}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Your name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value= {this.props.loggedUser.name}
                            aria-label="name"
                            aria-describedby="basic-addon1"
                            onChange={this.handleData}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">e-mail</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value= {this.props.loggedUser.email}
                            aria-label="email"
                            aria-describedby="basic-addon1"
                            onChange={this.handleData}
                        />
                    </InputGroup>
                    </form>

                    <InputGroup>
                        <Button variant="outline-success" onClick={this.editProfile}>Edit</Button>
                        <Button variant="outline-danger" onClick={this.deleteUser}>Delete</Button>
                    </InputGroup>

                    {this.state.deletedUser ? 
                          <Redirect exact path="/" render ={(props) => (<HomePage logged={this.state.loggedIn}/>)}>
                          </Redirect>
                    : <Alert variant="danger">
                        <Alert.Heading>
                            Something went wrong!
                        </Alert.Heading>
                        <p>We were not able to delete your Profile. Please try again.</p>
                    </Alert> 
                    }
            </div>
        )
    }
}

export default Profile;

