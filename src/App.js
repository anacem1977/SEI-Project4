import './App.css';
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    }
  }
  getBeers = async () => {
    const response = await axios.get("http://localhost:3000/origins");
    console.log(response)
    this.setState({
      beers: response.data,
    })
  };
  componentDidMount = () => {
    this.getBeers();
  }

  render() {
    const beers = this.state.beers.map((beer) => {
      return (
        <div>
          <h3>Style: {beer.style}</h3>
        </div>
      )
    })
    return (
      <div className="App">
        <h1> BEER ENCICLOPEDIA </h1>
        {beers}
      </div>
    );
  }
}

export default App;
