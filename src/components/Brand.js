import React, { Component } from "react";
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            setShow: false
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
        console.log(this.props);
        const currentSubstyle = this.props.id
        const substyleId = parseInt(currentSubstyle)
        const beerSubstyle = this.props.substyles[substyleId-1].substyle
        const beerBrands = this.props.brands.filter(oneBeerSubstyle => oneBeerSubstyle.substyleId === substyleId).map((brand) => {
            return (
                //console.log(this.state.brewery),
                <div className="brands">
                    <ListGroup>
                        <ListGroup.Item className="substyle">
                            <h2>{brand.brand}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p><b>ABV: </b>{brand.abv}</p>
                            <p><b>Likes: </b>{brand.likes}</p>
                            <Link to = {"/brewery/" + brand.breweryId} className="cardLinks"><FontAwesomeIcon icon="beer" fixedWidth/> Brewery for {brand.brand} and others</Link>
                        </ListGroup.Item>
                        <br></br>
                    </ListGroup>

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
                </div>
            )
        })

        return (
            <div className="brandsSub">
                <h1 className="subTitle">{beerSubstyle} Beers</h1>
                {beerBrands}
                <a href="#top">
                  <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
            </div>
        )
    }
}

export default Brands;