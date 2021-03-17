import React, { Component } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete"
import axios from "axios"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        }
    } 

    getAllBrands = async () => {
        const response = await axios.get("http://localhost:3005/brand");
        this.setState({
            beers: response.data
        })
      };

      componentDidMount = () => {
        this.getAllBrands();
      }

    newArray=[]

    //   makeOneArray = (item) => {
    //       this.newArray.push(item);
    //       console.log(this.newArray)
    //   }
     
    //   addBeers = this.allBeerBrands.ForEach(this.makeOneArray(this.item));
      
      
    
      beerBrands = [
        {
        name:"Corona",
        substyle: "Lager"
        },
        {
        name:"Corona Extra",
        substyle: "pilsner"
        }
    ]


        handleOnSearch = (string, results) => {
            console.log(string, results)
        }

        handleOnSelect = (item) => {
            console.log(item)
        }

        handleOnFocus = () => {
            console.log("Focused")
        }

        handleData = (event) => {
            console.log(event.target.value)
            
        }

    render() {
        const addBeers = this.state.beers.forEach((item) => {
            this.newArray.push(item)
            return (
                console.log(this.newArray)
            )
        })

        console.log(this.state.beers)
        return (
            <div className="search">
                <h1>Search</h1>
{this.addBeers}
                <div style={{ marginBottom: 20}}>Search for a Beer</div>
                <ReactSearchAutocomplete
                    items={this.beerBrands}
                    onSearch={this.handleOnSearch}
                    onChange={this.handleOnSelect}
                    onFocus={this.handleOnFocus}
                    styling={{ zIndex: 2}}
                    autoFocus
                    />
            </div>
            
        )
    }

}

export default Search;