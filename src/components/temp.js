import React, { Component } from "react";
import allGlasses from "./glassware.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image"

class Modal extends Component {
  render() {
    const oneGlass = 0;
    //console.log(this.props.location)
    //let status = this.props.location;

    return (
      //console.log(status),
      <div>
        <section>
          <Image className="glassPics" src= {allGlasses[oneGlass].image} alt="glass" rounded/>
          <div>
            <h1>{allGlasses[oneGlass].name}</h1>
            <h4>({allGlasses[oneGlass].description})</h4>
            <p><b>Benefits: </b></p>
            <p>{allGlasses[oneGlass].benefits}</p>
          </div>
        </section>
      </div>
  )};
}

export default Modal;