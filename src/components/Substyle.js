import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Card, OverlayTrigger } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Tooltip from "react-bootstrap/Tooltip"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Glassware from "./Glassware";

class Substyles extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show: false,
      setShow: false,
    }
  }
  
  showModal = () => {
    this.setState ({
        setShow: true,
        show: true
    })
}

  hideModal = () => {
    this.setState ({
        setShow: false,
        show: false
    })
}

    render () {

        const abv = (
          <Tooltip id="tooltip-abv" className="tooltips">
            Alcohol by volume
          </Tooltip>
        );

        const ibu = (
          <Tooltip id="tooltip-ibu" className="tooltips">
            International Bitterness Units
          </Tooltip>
        );

        const srm = (
          <Tooltip id="tooltip-srm" className="tooltips">
            Standard Reference Method
          </Tooltip>
        );

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
                    <h2 className="brandLink"><FontAwesomeIcon icon="beer" fixedWidth/>
                    {subStyle.substyle} </h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={subStyle.id}>
                    <Card.Body className="accordionCard">
                      <p>{subStyle.description}</p>
                      <p><b>Pairing: </b>{subStyle.pairing}</p>
                      <p><b>Glassware: </b>
                        {subStyle.glassware} 
                        <Link to="/glassware"><FontAwesomeIcon icon="beer" fixedWidth/></Link>
                      </p>

                      <Button variant="primary" onClick={this.showModal}>Modal</Button>
                      <Modal
                        show={this.state.show}
                        onHide={this.hideModal}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Modal Title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Modal Body</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={this.hideModal}>
                          Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      
                      <ul>
                          <OverlayTrigger trigger="hover" placement="left" overlay={abv}>
                            <li><b>ABV: </b>{subStyle.abv}</li>
                          </OverlayTrigger>
                          <OverlayTrigger trigger="hover" placement="left" overlay={ibu}>
                            <li><b>IBU: </b>{subStyle.ibu}</li>
                          </OverlayTrigger>
                          <OverlayTrigger trigger="hover" placement="left" overlay={srm}>
                            <li><b>Color: </b>{subStyle.color}</li>
                          </OverlayTrigger>
                          <li><b>Flavor: </b>{subStyle.flavor}</li>
                      </ul>

                      <Link to = {"/brand/" + subStyle.id} className="cardLinks"><FontAwesomeIcon icon="beer" fixedWidth/> {subStyle.substyle} brands</Link>
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
                <h1 className="subTitle">"{beerStyle}" Style Beers</h1>
                {beerSubstyles}
                <a href="#top">
                  <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
            </div>
        )
    }
}

export default Substyles;