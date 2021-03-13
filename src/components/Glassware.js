import React, { Component } from "react";
import allGlasses from "./glassware.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"

class Glassware extends Component {
  render() {
    
    let glasses = allGlasses.map((item, index) => {
      return (
        <div>
            <ListGroup> <ListGroup.Item>
                <Container>
                    <Row>
                        <Col><h3>{item.name}</h3></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p id={item.name}>{item.description}</p>
                        </Col>
                        <Col md="auto">
                            <Image src={item.image} rounded className="glassPics" alt={item.name}/>
                        </Col>
                    </Row>
                    <Row>
                        <br></br>
                        <p className="benefits"><b>Benefits: </b>{item.benefits}</p>
                    </Row>
                </Container>
            </ListGroup.Item></ListGroup>
        </div>
      );
    }) 

    return (
        <div className="glass">
                <h1>How to serve beer</h1>
                <p className="howToServe">Scientific studies show that the shape of glassware will impact head development and retention. Why is this important? The foam created by pouring a beer acts as a net for many of the volatiles in a beer. What's a volatile? Compounds that evaporate from beer to create its aroma, such as hop oils, all kinds of yeast fermentation byproducts like alcohol, fusels and fruity esters, spices or other additions. So a glass that promotes a healthy foam head may enhance the trapping of certain volatiles. And as varying levels of head retention and presentation are desired with different styles of beers, different styles of glassware should be used accordingly.</p>
                {glasses}
            <a href="#top">
                <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
            </a>
        </div>
    )
  }
}

export default Glassware;