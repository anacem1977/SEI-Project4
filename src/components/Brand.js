import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Brands extends Component {

    addLike = async (event) => {
        // console.log(event)
        const thisBeerId = event.target.id
        // console.log(thisBeerId)
        const response = await axios.get(`http://localhost:3005/brand/${thisBeerId}`);
        console.log(response.data)
        const newDetails = {
            substyleId: response.data.substyleId,
            brand: response.data.brand,
            breweryId: response.data.breweryId,
            abv: response.data.abv,
            likes: response.data.likes +1
        }
        console.log(newDetails)
        const responseBack = await axios.put(`http://localhost:3005/brand/${thisBeerId}`, newDetails)
    }



    render () 
    {
        // console.log(this.props);
        const currentSubstyle = this.props.id
        const substyleId = parseInt(currentSubstyle)
        const beerSubstyle = this.props.substyles[substyleId-1].substyle
        const beerBrands = this.props.brands.filter(oneBeerSubstyle => oneBeerSubstyle.substyleId === substyleId).map((brand) => {
            return (
                //console.log(this.state.brewery),
                <div className="brands">
                    <ListGroup>
                        <ListGroup.Item className="substyle">
                            <h2>{brand.brand}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item className="beerBrand">
                            <p><b>ABV: </b>{brand.abv}</p>
                            <p><FontAwesomeIcon icon = "heart" fixedWidth className="fa-spin" as="link" className="likeLink"/> {brand.likes}</p>

                            <Button variant="success" onClick={this.addLike} id={brand.id}>Like</Button>
                            
                            <Link to = {"/brewery/" + brand.breweryId} className="cardLinks"><FontAwesomeIcon icon="beer" fixedWidth as="link"/> Brewery for {brand.brand} and others</Link>
                        </ListGroup.Item>
                        <br></br>
                    </ListGroup>

                </div>
            )
        })
        return (
            <div className="brandsSub">
                <h1 className="subTitle">"{beerSubstyle}" Beers</h1>
                {beerBrands}
                <a href="#top">
                  <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
            </div>
        )
    }
}

export default Brands;