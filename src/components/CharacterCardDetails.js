import React from 'react';
let status = '';
class CharacterCardDetails extends React.Component {
  render() {
    if (this.props.data.length === 0) {
      return null;
    } else {
      if (this.props.data[this.props.match.params.id].alive === true) {
        status = 'Vivo';
      } else if (this.props.data[this.props.match.params.id].alive === false) {
        status = 'Muerto';
      } else {
        status = 'Sin información'
      }
      return (
        <div className="divDetails">
          <div className="imgContainerDetails" style={{ backgroundImage: `url(${this.props.data[this.props.match.params.id].image})` }}>
            <img className="imgDetails" src={this.props.data[this.props.match.params.id].image} alt={this.props.data[this.props.match.params.id].name} />
          </div>
          <div className="datosContainer">
            <h2 className="">{this.props.data[this.props.match.params.id].name}</h2>
            <p>{this.props.data[this.props.match.params.id].house}</p>
            <p>{this.props.data[this.props.match.params.id].yearOfBirth}</p>
            <p>{this.props.data[this.props.match.params.id].patronus}</p>
            <p>{status}</p>
          </div>
        </div>
      );
    }
  }
}

export default CharacterCardDetails;