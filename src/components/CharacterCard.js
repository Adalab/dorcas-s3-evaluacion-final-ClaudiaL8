import React from 'react';
import CharacterCardDetails from './CharacterCardDetails';

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="listItems">
        <img className="characterImg" src={this.props.item.image} alt={this.props.item.name} />
        <h1>{this.props.item.name}</h1>
        <p>{this.props.item.house}</p>
      </div>
    );
  }
}

export default CharacterCard;