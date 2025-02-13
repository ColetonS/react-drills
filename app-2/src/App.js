import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: ['steak', 'Cheerios', 'flour', 'salmon']
    }
  }

  

  render() {
    let foodsToDisplay = this.state.foods.map((element, index) => {
      return <h2 key = {index}>{element}</h2>
    })
    return (
      <div className="App">{foodsToDisplay}</div>
    );
  }
}

export default App;
