import React from 'react';

class CharacterCardDetails extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.data.length === 0) {
      return null;
    } else {
      return (
        <div className="itemDetails">
          <img className="characterImg" src={this.props.data[this.props.match.params.id].image} alt={this.props.data[this.props.match.params.id].name} />
          <h4>{this.props.data[this.props.match.params.id].name}</h4>
          <p>{this.props.data[this.props.match.params.id].house}</p>
          <p>{this.props.data[this.props.match.params.id].yearOfBirth}</p>
          <p>{this.props.data[this.props.match.params.id].patronus}</p>
          <p>{this.props.data[this.props.match.params.id].alive}</p>
        </div>
      );
    }
  }
}

export default CharacterCardDetails;