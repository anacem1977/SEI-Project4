import React, { Component } from "react";
import axios from "axios";

class Brands extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allBrands : []
        }
    }

    getAllBrands = async () => {
        const response = await axios.get("http://localhost:3005/brand");
        console.log(response.data)
        this.setState({
            allBrands: response.data
        })
    };

    componentDidMount = () => {
        this.getAllBrands();
    }

    render () {
        const currentSubstyle = this.props.match.params.index
        const substyleId = parseInt(currentSubstyle)
        const beerSubstyles = this.state.allBrands.filter(oneBeerSubstyle => oneBeerSubstyle.substyleId === substyleId).map((brand) => {
            return (
                console.log(brand),
                <div>
                    <h2>Brand: {brand.brand}</h2>
                </div>
            )
        })

        return (
            <div className="bands">
                <h1>Brands</h1>
                {beerSubstyles}
            </div>
        )
    }

}

export default Brands;