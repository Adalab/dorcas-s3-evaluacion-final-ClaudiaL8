import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
          <h1>Harry Potter Characters</h1>
          <input type="text" />
          <ul>
            {this.state.data.map(function (item) {
              return (
                <li>
                  <div>
                    <img src={item.image} alt={item.name} />
                    <h1>{item.name}</h1>
                    <h4>{item.house}</h4>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      );
    }
  }

  export default App;
