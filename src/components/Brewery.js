import React, { Component } from "react";

import {faBeer, faLevelUpAlt} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Brewery extends Component {
        //console.log(props.brands)

    render () {
        const currentBrewery = this.props.id
        const breweryId = parseInt(currentBrewery)
        const breweries = this.props.breweries.filter(oneBrewery => oneBrewery.id === breweryId).map((brewery) => {
            return (
                <div className="allbreweries">
                    <h1 className="subtitle">{brewery.name}</h1>
                    <h3>{brewery.address}</h3>
                    <a href={`https://${brewery.url}`}target="_blank" rel="noreferrer" className="webaddress">{brewery.url}</a>
                </div>
            )
        })

        const brands = this.props.brands.filter(oneBrand => oneBrand.breweryId === breweryId).map((brand) => {
            return (
                <div className="allbrands">
                    <ul>
                        <li>{brand.brand}</li>
                    </ul>
                </div>
            )
        })

        return (
            <div className="brewery">
                <h1></h1>
                {breweries}
                {brands}

                <a href="#top">
                  <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
                
            </div>
        )
    }
}

export default Brewery;