import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup"
import { ListGroupItem } from "react-bootstrap";


class Origins extends Component {
        //console.log(props)

    render () {
        const beerOrigins = this.props.beers.map((origin) => {
            return (
              <div key={origin.style}>
                  <ListGroup>
                    <ListGroup.Item className="substyle">
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