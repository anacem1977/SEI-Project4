import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Origins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beerOrigins: [],
            substyleId: ""
        }
    }

    getAllOrigins = async () => {
        const response = await axios.get("http://localhost:3005/origin");
        console.log(response.data)
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
                    <h2>
                      <Link to= {"/substyle/" + origin.id}> 
                      Style: {origin.style}
                      </Link>
                    </h2>
                    <p>{origin.description}</p>

              </div>
            )
          })

        return (
            <div className="origins">
                <h1 className="subTitle"> Where was your favorite beer created? </h1>
                {beerOrigins}
            </div>
        )
    }
}

export default Origins;