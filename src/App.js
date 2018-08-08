import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.personajes = this.personajes.bind(this);
    this.personajes()
  }

  personajes() {
    fetch(
      'http://hp-api.herokuapp.com/api/characters'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const persons = json;
        this.setState({
          data: persons
        })
      })
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
