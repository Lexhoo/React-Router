import React, { Component } from 'react';
import GenerateCharac from "./GenerateCharac";
import DisplayEmployee from "./DisplayEmployee";
import './App.css';
const sampleCharac = {
  image: "https://www.lifewire.com/thmb/vDB3ply4rHJG_BDWeD0AbuRu-EU=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg",
  quote: "Aaaaa qu'es ce qu'on est sèrré au fond de cette boite !!!!",
  character: "Homer B2O",
  characterDirection: "front",
};
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      charac: sampleCharac
    };
  }
  getCharac() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
      .then(response => response.json())
      .then(data => {
        this.setState({
          charac: data[0]
        });
      });
  }
  render() {
    return (
      <div className="App">
        <GenerateCharac selectCharac={() => this.getCharac()} />
        <DisplayEmployee charac={this.state.charac} />
      </div>
    );
  }
}
export default App;