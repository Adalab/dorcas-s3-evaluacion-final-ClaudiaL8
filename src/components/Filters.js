import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <input type="text" onChange={this.props.valueInput} />
    );
  }
}

export default Filters;