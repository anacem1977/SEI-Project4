// import axios from "axios";
// import React, { Component } from "react";
// import { FormControl } from "react-bootstrap";
// import { Route, Switch} from "react-router-dom";
// import InputGroup from "react-bootstrap/InputGroup"
// import Button from "react-bootstrap/Button"
// import Profile from "./Profile";

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         console.log(props)
//         this.state= {
//             // username: "",
//             // password: "",
//             // loggedIn: false,
//             // loggedUser: []
//         }
//     }

//     // //This function records the changes being made to the fields where it is applied
//     // handleLogin = (event) => {
//     //     event.preventDefault();
//     //     this.setState({
//     //         [event.target.name]: event.target.value
//     //     })
//     // }

//     // //This function changes the state and makes the axios request with the information from the updated state
//     // handleSubmit = async (event) => {
//     //     event.preventDefault();
//     //     const userDetails = {
//     //         username: this.state.username,
//     //         password: this.state.password,
//     //     };
//     //     //console.log(userDetails);
//     //     const response = await axios.post("http://localhost:3005/user/login", userDetails);
//     //     console.log(response.data)
//     //     this.setState({
//     //         loggedUser: response.data,
//     //         loggedIn: true
//     //     })
//     // }

//     render () {
//         return (
//             <div className="login">
//                 {this.state.loggedIn ?
//                 <div>
//                     <h1>Welcome!</h1>
//                     <InputGroup className="mb-3">
//                         <InputGroup.Prepend>
//                             <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
//                         </InputGroup.Prepend>
//                         <FormControl
//                             value= {this.state.loggedUser.username}
//                             aria-label="username"
//                             aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>

//                     <InputGroup className="mb-3">
//                         <InputGroup.Prepend>
//                             <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
//                         </InputGroup.Prepend>
//                         <FormControl
//                             value= {this.state.loggedUser.password}
//                             aria-label="password"
//                             aria-describedby="basic-addon1"
//                             type= "password"
//                         />
//                     </InputGroup>

//                     <InputGroup className="mb-3">
//                         <InputGroup.Prepend>
//                             <InputGroup.Text id="basic-addon1">Your name</InputGroup.Text>
//                         </InputGroup.Prepend>
//                         <FormControl
//                             value= {this.state.loggedUser.name}
//                             aria-label="name"
//                             aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>

//                     <InputGroup className="mb-3">
//                         <InputGroup.Prepend>
//                             <InputGroup.Text id="basic-addon1">e-mail</InputGroup.Text>
//                         </InputGroup.Prepend>
//                         <FormControl
//                             value= {this.state.loggedUser.email}
//                             aria-label="email"
//                             aria-describedby="basic-addon1"
//                         />
//                     </InputGroup>

//                     <InputGroup>
//                         <Button variant="outline-success">Edit</Button>
//                         <Button variant="outline-danger">Delete</Button>
//                         <Button variant="outline-warning">Sign Out</Button>
//                     </InputGroup>

//                 </div>
//                 : <div>  
//                 <h1>Login</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <InputGroup className="mb-3">
//                         <FormControl
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             aria-label="username"
//                             aria-describedby="basic-addon1"
//                             value={this.state.username} 
//                             onChange={this.handleLogin}
//                         />
//                     </InputGroup>

//                     <InputGroup className="mb-3">
//                         <FormControl
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             aria-label="password"
//                             aria-describedby="basic-addon1"
//                             value={this.state.password} 
//                             onChange={this.handleLogin}
//                         />
//                     </InputGroup>

//                     <InputGroup>
//                         <Button variant="outline-success"
//                             type="submit"
//                         >Log In </Button>
//                     </InputGroup>
//                 </form>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }
// export default Login;