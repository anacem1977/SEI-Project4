import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"


class Substyles extends Component {
    constructor(props) {
        super(props);

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
        const currentStyle = this.props.match.params.index
        const styleId = parseInt(currentStyle)
        const beerStyles = this.state.allBeerSubstyles.filter(oneBeerStyle => oneBeerStyle.styleId === styleId).map((subStyle) => {
          return (
            console.log(subStyle),
            <div>
                  <h2>
                    <Link to = {"/brand/" + subStyle.id}>
                      Substyle: {subStyle.substyle}
                      </Link>
                    </h2>
                  <h3>Glassware: {subStyle.glassware}</h3>
                  <p>{subStyle.description}</p>
                  <p><b>Pairing: </b>{subStyle.pairing}</p>
                  <ul>
                    <li><b>ABV: </b>{subStyle.abv}</li>
                    <li><b>IBU: </b>{subStyle.ibu}</li>
                    <li><b>Color: </b>{subStyle.color}</li>
                    <li><b>Flavor: </b>{subStyle.flavor}</li>
                  </ul>
            </div>
          )
        })
        
        return (
            <div className="substyles">
                <h1> Substyles</h1>
                <p>Ana{this.props.style}</p>
                {beerStyles}
            </div>
        )
    }
}

export default Substyles;