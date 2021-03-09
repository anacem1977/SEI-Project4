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

        return (
            <div className="bands">
                <h1>Brands</h1>
            </div>
        )
    }

}

export default Brands;