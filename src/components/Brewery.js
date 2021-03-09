import React, { Component } from "react";
import axios from "axios";

class Brewery extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            allBreweries: [],
            allBrands: []
        }
    }

    getAllBreweries = async () => {
        const response = await axios.get("http://localhost:3005/brewery");
        console.log(response.data)
        this.setState({
            allBreweries: response.data
        })
    };

    getAllBrands = async () => {
        const responseBrands = await axios.get("http://localhost:3005/brand");
        console.log(responseBrands.data)
        this.setState({
            allBrands: responseBrands.data
        })
    };

    componentDidMount = () => {
        this.getAllBreweries();
        this.getAllBrands();
    }

    render () {
        const currentBrewery = this.props.match.params.index
        const breweryId = parseInt(currentBrewery)
        const breweries = this.state.allBreweries.filter(oneBrewery => oneBrewery.id === breweryId).map((brewery) => {
            return (
                <div>
                    <h2>Brewery: {brewery.name}</h2>
                    <h3>{brewery.address}</h3>
                    <a href={`https://${brewery.url}`}target="_blank" rel="noreferrer">{brewery.url}</a>
                </div>
            )
        })

        const brands = this.state.allBrands.filter(oneBrand => oneBrand.breweryId === breweryId).map((brand) => {
            return (
                <div>
                    <ul>
                        <li>{brand.brand}</li>
                    </ul>
                </div>
            )
        })

        return (
            <div className="brewery">
                <h1>Brewery</h1>
                {breweries}
                {brands}
            </div>
        )
    }
}

export default Brewery;