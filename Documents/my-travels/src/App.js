import React, { Component } from 'react';
import Travels from './travel';
import Travels2 from './travel';
import './Travel.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My travels</h1>
        </header>
        <Travels
          destination="Miami"
          country="USA"
          image="https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/07432_800x480.jpg"
          distance= "120 000 KM"
        />
        <Travels2
          destination="Sydney"
          country="Australia"
          image="https://ae01.alicdn.com/kf/HTB1IRsgesIrBKNjSZK9q6ygoVXa9/HD-canvas-Prints-Home-D-cor-Moderne-Paysages-Mur-Art-Peinture-incroyable-sydney-pont-Sans-Cadre.jpg_640x640.jpg"
          distance= "392 450 KM"
        />
      </div>
    );
  }
}

export default App;