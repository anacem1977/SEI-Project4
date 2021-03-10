import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap";
import Origins from "./Origin"


class Substyles extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            allBeerSubstyles: []
        }
    }

    getAllSubstyles = async () => {
        const response = await axios.get("http://localhost:3005/substyle");
        this.setState({
            allBeerSubstyles: response.data,
        })
      };

      componentDidMount = () => {
        this.getAllSubstyles();
      }

    render () {
        const currentStyle = this.props.id
        const styleId = parseInt(currentStyle)
        const beerStyles = this.state.allBeerSubstyles.filter(oneBeerStyle => oneBeerStyle.styleId === styleId).map((subStyle) => {
          return (
            console.log(subStyle),
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
                <h1> Substyle</h1>
                <p>Ana{this.props.style}</p>
                {beerStyles}
            </div>
        )
    }
}

export default Substyles;