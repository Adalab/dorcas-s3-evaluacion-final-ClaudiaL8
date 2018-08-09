import React from 'react';

let house = '';
class CharacterCard extends React.Component {
  render() {
    if (this.props.item.house === '') {
      house = 'SIN CASA';
    } else {
      house = this.props.item.house;
    }
    return (
      <div className="divContainer">
        <div className="divItems" style={{ backgroundImage: `url(${this.props.item.image})` }}>
          <img className="characterImg" src={this.props.item.image} alt={this.props.item.name} />
        </div>
        <h3 className="characterName">{this.props.item.name}</h3>
        <p className="characterHouse">{house}</p>
      </div>
    );
  }
}

export default CharacterCard;