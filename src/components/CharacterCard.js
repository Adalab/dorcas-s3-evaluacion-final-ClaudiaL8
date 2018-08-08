import React from 'react';

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="listItems">
        <img className="characterImg" src={this.props.item.image} alt={this.props.item.name} />
        <h4>{this.props.item.name}</h4>
        <p>{this.props.item.house}</p>
      </div>
    );
  }
}

export default CharacterCard;