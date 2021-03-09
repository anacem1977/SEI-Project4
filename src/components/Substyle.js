import React, { Component } from "react";
import axios from "axios";
import Origin from "./Origin";

class Substyles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allBeerSubstyles: []
        }
    }

    getAllSubstyles = async () => {
        const response = await axios.get("http://localhost:3005/substyle");
        console.log(response.data)
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
        console.log(styleId)
        const beerStyles = this.state.allBeerSubstyles.filter(oneBeerStyle => oneBeerStyle.styleId === styleId).map((subStyle) => {
          return (
            console.log(subStyle),
            <div>
                  <h2>Substyle: {subStyle.substyle}</h2>
                  <h3>Style: {subStyle.glassware}</h3>
            </div>
          )
        })
        
        return (
            <div className="substyles">
                <h1> Substyles</h1>
                {beerStyles}
            </div>
        )
    }
}

export default Substyles;