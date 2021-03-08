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
        const response = await axios.get("http://localhost:3000/origins");
        console.log(response)
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
              <div>
                <h3>Style: {origin.style}</h3>
                {beerOrigins}
              </div>
            )
          })

        return (
            <div className="Origins">
                <h1> Origins </h1>
            </div>
        )
    }
}

export default Origins;