import React, { Component } from "react";
import axios from "axios";

class Brewery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allBreweries: []
        }
    }

    getAllBreweries = async () => {
        const response = await axios.get("http://localhost:3005/brewery");
        console.log(response.data)
        this.setState({
            allBreweries: response.data
        })
    };

    componentDidMount = () => {
        this.getAllBreweries();
    }

    render () {
        const currentBrewery = this.props.match.params.index
        const breweryId = parseInt(currentBrewery)
        const breweries = this.state.allBreweries.filter(oneBrewery => oneBrewery.id === breweryId).map((brewery) => {
            return (
                console.log(brewery),
                <div>
                    <h2>Brewery: {brewery.name}</h2>
                    <h3>{brewery.address}</h3>
                    <a href={`https://${brewery.url}`}target="_blank">{brewery.url}</a>
                </div>
            )
        })

        return (
            <div className="brewery">
                <h1>Brewery</h1>
                {breweries}
            </div>
        )
    }
}

export default Brewery;