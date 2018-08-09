import React from 'react';
let status = '';
class CharacterCardDetails extends React.Component {
  render() {
    if (this.props.data.length === 0) {
      return null;
    } else {
      if (this.props.data[this.props.match.params.id].alive === true) {
        status = 'VIVO';
      } else if (this.props.data[this.props.match.params.id].alive === false) {
        status = '💀';
      } else {
        status = 'SIN INFORMACIÓN'
      }
      return (
        <div className="CardDetails">
          <div className="divDetails">
            <div className="imgContainerDetails" style={{ backgroundImage: `url(${this.props.data[this.props.match.params.id].image})` }}>
              <img className="imgDetails" src={this.props.data[this.props.match.params.id].image} alt={this.props.data[this.props.match.params.id].name} />
            </div>
            <div className="datosContainer">
              <h2 className="titleDatos">{this.props.data[this.props.match.params.id].name}</h2>
              <p className="parDatos">Casa: {this.props.data[this.props.match.params.id].house}</p>
              <p className="parDatos">Nacimiento: {this.props.data[this.props.match.params.id].yearOfBirth}</p>
              <p className="parDatos">Patronus: {this.props.data[this.props.match.params.id].patronus}</p>
              <p className="parDatos">Estado: {status}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CharacterCardDetails;