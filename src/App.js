import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterCardDetails from './components/CharacterCardDetails';

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
        let resultspersons = [];
        for (let i = 0; i < persons.length; i++) {
          resultspersons[i] = {
            ...persons[i],
            id: i
          }
        }
        this.setState({
          data: resultspersons
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
        <Switch>
          <Route
            path='/CharacterCardDetails/:id'
            render={props => <CharacterCardDetails match={props.match} data={this.state.data} />}
          />
          <Route
            exact path='/'
            render={() => <CharacterList data={this.state.data} campo={this.state.campo} valueInput={this.valueInput} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
