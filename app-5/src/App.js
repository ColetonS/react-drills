import React, { Component } from "react";
import "./App.css";

import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image pizza = {'https://lh3.googleusercontent.com/iZMSGxxgmSuwPN4mfWWlDSAnnfft2_hEsaT4qytNXfDkumJJTc9ZMF4cADOYSGMg9q2gYw=s104'} />
      </div>
    );
  }
}

export default App;
