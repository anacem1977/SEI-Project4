import React, { Component } from "react";
import axios from "axios";

class Origins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerOrigins: []
        }
    }

    getAllOrigins = async () => {
        const response = await axios.get("http://localhost:3005/origin");
        this.setState({
          beerOrigins: response.data,
        })
      };

      componentDidMount = () => {
        this.getAllOrigins();
      }

    render () {
        const beerOrigins = this.state.beerOrigins.map((origin) => {
            return (
              <div key={origin.id}>
                    <h2>Origin: {origin.origin}</h2>
                    <h3>Style: {origin.style}</h3>
                    <p>{origin.description}</p>
              </div>
            )
          })

        return (
            <div className="origins">
                <h1> Where was your favorite beer created? </h1>
                {beerOrigins}
            </div>
        )
    }
}

export default Origins;