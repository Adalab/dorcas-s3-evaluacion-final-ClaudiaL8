import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

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
        <Filters valueInput={this.valueInput} />
        <CharacterList data={this.state.data} campo={this.state.campo}/>
      </div>
    );
  }
}

export default App;
