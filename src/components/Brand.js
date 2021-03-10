import React, { Component } from "react";
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap";

class Brands extends Component {
        //console.log(props.breweries)

    render () {
        const currentSubstyle = this.props.id
        const substyleId = parseInt(currentSubstyle)
        const beerBrands = this.props.brands.filter(oneBeerSubstyle => oneBeerSubstyle.substyleId === substyleId).map((brand) => {
            return (
                //console.log(this.state.brewery),
                <div>
                    <ListGroup>
                        <ListGroup.Item className="substyle">
                            <h2>{brand.brand}</h2>
                            <h3><Link to = {"/brewery/" + brand.breweryId}>Brewery</Link></h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p><b>ABV: </b>{brand.abv}</p>
                            <p><b>Likes: </b>{brand.likes}</p>
                    </ListGroup.Item>
                    </ListGroup>
                </div>
            )
        })

        return (
            <div className="bands">
                <h1>Brands</h1>
                {beerBrands}
            </div>
        )
    }
}

export default Brands;