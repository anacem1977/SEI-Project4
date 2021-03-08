import React, { Component } from "react";
import axios from "axios";

class Substyles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerSubstyles: []
        }
    }

    getAllSubstyles = async () => {
        const response = await axios.get("http://localhost:3000/substyles");
        console.log(response.data)
        this.setState({
            beerSubstyles: response.data,
        })
      };

      componentDidMount = () => {
        this.getAllSubstyles();
      }

    render () {
        const beerSubstyles = this.state.beerSubstyles.map((substyle) => {
            return (
              <div>
                    <h2>Substyle: {substyle.substyle}</h2>
                    <h3>Style: {substyle.glassware}</h3>
              </div>
            )
          })

        return (
            <div className="substyles">
                <h1> Substyles</h1>
                {beerSubstyles}
            </div>
        )
    }
}

export default Substyles;