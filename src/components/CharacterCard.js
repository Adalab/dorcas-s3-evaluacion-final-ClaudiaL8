import React from 'react';

class CharacterCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.item.image} alt={this.props.item.name} />
        <h1>{this.props.item.name}</h1>
        <h4>{this.props.item.house}</h4>
      </div>
    );
  }
}

export default CharacterCard;