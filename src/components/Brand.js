import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { ListGroup } from "react-bootstrap";

class Brands extends Component {
    constructor(props) {
        super(props);
        //console.log(props.breweries)
        this.state = {
            // allBrands : [],
            // allBreweries: []
        }
    }

    // getAllBrands = async () => {
    //     const response = await axios.get("http://localhost:3005/brand");
    //     this.setState({
    //         allBrands: response.data
    //     })
    // };

    // getAllBreweries = async () => {
    //     const responseBrew = await axios.get("http://localhost:3005/brewery");
    //     this.setState({
    //         allBreweries: responseBrew.data
    //     })
    // };

    // componentDidMount = () => {
    //     this.getAllBrands();
    //     this.getAllBreweries();
    // }

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