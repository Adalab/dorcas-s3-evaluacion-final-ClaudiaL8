import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      campo: ''
    }
    this.valueInput = this.valueInput.bind(this)
  }
  componentDidMount() {
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
  valueInput(e) {
    const filtro = e.currentTarget.value;
    this.setState({
      campo: filtro
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Harry Potter Characters</h1>
        <input type="text" onChange={this.valueInput} />
        <ul>
          {this.state.data
          .filter(article=>{
            return article.name.toLocaleLowerCase().includes(this.state.campo.toLocaleLowerCase());
          })
          .map(item => {
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
