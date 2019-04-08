import React, { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Homer Simpson' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({name: event.target.name});
      }
    
      handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.name);
        event.preventDefault();
      }
    
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input name={this.state.name} onChange={this.handleChange}/>
        
        <input type="submit" name="Envoyer" />
      </form>
    );
    
  }
  
  
}

export default NameForm;