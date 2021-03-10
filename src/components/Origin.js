import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup"
import { ListGroupItem } from "react-bootstrap";
import Substyle from "./Substyle";

class Origins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerOrigins: [],
            substyleName:"",
        }
    }

    getAllOrigins = async () => {
        const response = await axios.get("http://localhost:3005/origin");
        console.log(response.data)
        this.setState({
          beerOrigins: response.data,
        })
      };

      componentDidMount = () => {
        this.getAllOrigins();
      }

    render () {
        const beerOrigins = this.state.beerOrigins.map((origin) => {
            return (
              <div key={origin.id}>
                  <ListGroup>
                    <ListGroup.Item className="substyle" onClick={this.passData}>
                      <h2> <Link to= {"/substyle/" + origin.id} className = "styleLink"> 
                      {origin.style} - {origin.origin}</Link></h2> 
                    </ListGroup.Item>
                    <ListGroupItem>
                      <p>{origin.description}</p>
                      </ListGroupItem>
                  </ListGroup>
                  <br></br>
              </div>
            )
          })

        return (
            <div className="origins">
                <h1 className="subTitle"> Where was your favorite beer created? </h1>
                {beerOrigins}
            </div>
        )
    }
}

export default Origins;