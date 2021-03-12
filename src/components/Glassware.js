import React, { Component } from "react";
import allGlasses from "./glassware.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image"

class Glassware extends Component {
  render() {
    
    let glasses = allGlasses.map((item, index) => {
      return (
        <div>
            <h3>{item.name}</h3>
            <p id={item.name}>{item.description}</p>
            <p><b>Benefits: </b>{item.benefits}</p>
            <Image src={item.image} rounded className="glassPics" alt={item.name}/>
        </div>
      );
    }) 

    return (
        <div className="glass">
                <h2>How to serve beer</h2>
                <p>Scientific studies show that the shape of glassware will impact head development and retention. Why is this important? The foam created by pouring a beer acts as a net for many of the volatiles in a beer. What's a volatile? Compounds that evaporate from beer to create its aroma, such as hop oils, all kinds of yeast fermentation byproducts like alcohol, fusels and fruity esters, spices or other additions. So a glass that promotes a healthy foam head may enhance the trapping of certain volatiles. And as varying levels of head retention and presentation are desired with different styles of beers, different styles of glassware should be used accordingly.</p>
                {glasses}
            <a href="#top">
                <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
            </a>
        </div>
    )
  }
}

export default Glassware;