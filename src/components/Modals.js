import React, { Component } from "react";
import allGlasses from "./glassware.json";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show: this.props.show,
            setShow: this.props.setShow
          }
        console.log(props)
    }

    hideModal = () => {
        this.setState ({
            setShow: !this.state.show,
            show: !this.state.setShow
        })
    }
    
  render() {
    const beerGlassName = allGlasses.filter(oneBeerGlass => oneBeerGlass.name === this.props.glassType ).map((oneGlass) => {
        return (
          <p>{oneGlass.name}</p>
        )
      })

      const beerGlassDescr = allGlasses.filter(oneBeerGlass => oneBeerGlass.name === this.props.glassType).map((oneGlass) => {
        return (
          <p>{oneGlass.description}</p>
        )
      })
    return (
      //console.log(status),
      <div>
        <Modal
            show={this.state.show}
            onHide={this.hideModal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{beerGlassName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{beerGlassDescr}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
        </Modal>
      </div>
  )};
}

export default Modals;