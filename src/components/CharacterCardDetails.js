import React from 'react';
let status = '';
class CharacterCardDetails extends React.Component {
  render() {
    if (this.props.data[this.props.match.params.id].alive === true) {
      status = 'Vivo';
    } else {
      status = 'Muerto';
    }
    console.log(this.props.data[this.props.match.params.id]);

    return (
      <div className="itemDetails">
        <img className="characterImg" src={this.props.data[this.props.match.params.id].image} alt={this.props.data[this.props.match.params.id].name} />
        <h4>{this.props.data[this.props.match.params.id].name}</h4>
        <p>{this.props.data[this.props.match.params.id].house}</p>
        <p>{this.props.data[this.props.match.params.id].yearOfBirth}</p>
        <p>{this.props.data[this.props.match.params.id].patronus}</p>
        <p>{status}</p>
      </div>
    );
  }
}

export default CharacterCardDetails;