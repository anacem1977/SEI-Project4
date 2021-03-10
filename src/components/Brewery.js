import React, { Component } from "react";

class Brewery extends Component {
        //console.log(props.brands)

    render () {
        const currentBrewery = this.props.id
        const breweryId = parseInt(currentBrewery)
        const breweries = this.props.breweries.filter(oneBrewery => oneBrewery.id === breweryId).map((brewery) => {
            return (
                <div>
                    <h2>Brewery: {brewery.name}</h2>
                    <h3>{brewery.address}</h3>
                    <a href={`https://${brewery.url}`}target="_blank" rel="noreferrer">{brewery.url}</a>
                </div>
            )
        })

        const brands = this.props.brands.filter(oneBrand => oneBrand.breweryId === breweryId).map((brand) => {
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