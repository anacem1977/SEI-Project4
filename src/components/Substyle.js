import React, { Component } from "react";
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap";


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
              <ListGroup>
                <ListGroup.Item className="substyle">
                  <h2><Link to = {"/brand/" + subStyle.id} className= "styleLink">{subStyle.substyle}</Link></h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h3>Glassware: {subStyle.glassware}</h3>
                  <p>{subStyle.description}</p>
                  <p><b>Pairing: </b>{subStyle.pairing}</p>
                  <ul>
                    <li><b>ABV: </b>{subStyle.abv}</li>
                    <li><b>IBU: </b>{subStyle.ibu}</li>
                    <li><b>Color: </b>{subStyle.color}</li>
                    <li><b>Flavor: </b>{subStyle.flavor}</li>
                  </ul>
                  </ListGroup.Item>
                  </ListGroup>
                  <br></br>
            </div>
          )
        })
        
        return (
            <div className="substyles">
                <h1>{beerStyle}</h1>
                {beerSubstyles}
            </div>
        )
    }
}

export default Substyles;