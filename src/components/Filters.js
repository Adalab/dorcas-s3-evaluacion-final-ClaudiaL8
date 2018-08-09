import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <input className="page__input" type="text" onChange={this.props.valueInput} />
    );
  }
}

export default Filters;