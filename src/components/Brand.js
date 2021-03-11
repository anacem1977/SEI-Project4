import React, { Component } from "react";
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap";

class Brands extends Component {
        

    render () {
        console.log(this.props);
        const currentSubstyle = this.props.id
        const substyleId = parseInt(currentSubstyle)
        const beerSubstyle = this.props.substyles[substyleId-1].substyle
        const beerBrands = this.props.brands.filter(oneBeerSubstyle => oneBeerSubstyle.substyleId === substyleId).map((brand) => {
            return (
                //console.log(this.state.brewery),
                <div className="brands">
                    <ListGroup>
                        <ListGroup.Item className="substyle">
                            <h2 className="brandLink">{brand.brand}</h2>
                            
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p><b>ABV: </b>{brand.abv}</p>
                            <p><b>Likes: </b>{brand.likes}</p>
                            <p><Link to = {"/brewery/" + brand.breweryId}>Check out who makes the {brand.brand} and other beers!</Link></p>
                        </ListGroup.Item>
                        <br></br>
                    </ListGroup>
                </div>
            )
        })

        return (
            <div>
                <h1 className="subTitle">{beerSubstyle} Beers</h1>
                {beerBrands}
                <a className="backToTop" href="#top">Back to top</a>
            </div>
        )
    }
}

export default Brands;