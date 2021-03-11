import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Substyles extends Component {
        //console.log(props.beers)

    render () {
        const currentStyle = this.props.id
        const styleId = parseInt(currentStyle)
        const beerStyle = this.props.beers[styleId-1].style
        const beerSubstyles = this.props.substyles.filter(oneBeerStyle => oneBeerStyle.styleId === styleId).map((subStyle) => {
          return (
            //console.log(subStyle),
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={subStyle.id} className="substyle list-group-item">
                    <h2 className="brandLink">{subStyle.substyle}</h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={subStyle.id}>
                    <Card.Body className="accordionCard">
                      <p>{subStyle.description}</p>
                      <p><b>Pairing: </b>{subStyle.pairing}</p>
                      <p><b>Glassware: </b>{subStyle.glassware}</p>
                      <ul>
                        <li><b>ABV: </b>{subStyle.abv}</li>
                        <li><b>IBU: </b>{subStyle.ibu}</li>
                        <li><b>Color: </b>{subStyle.color}</li>
                        <li><b>Flavor: </b>{subStyle.flavor}</li>
                      </ul>
                      <p><Link to = {"/brand/" + subStyle.id}>Check out these {subStyle.substyle} brands! </Link></p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <br></br>
            </div>
          )
        })
        
        return (
            <div className="substyles">
                <h1 className="subTitle">{beerStyle} Style </h1>
                <h5>Click on any of the Beer Styles below to learn more.</h5>
                {beerSubstyles}
                <a href="#top">
                  <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
            </div>
        )
    }
}

export default Substyles;