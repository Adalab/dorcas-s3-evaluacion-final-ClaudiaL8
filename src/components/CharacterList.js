import React from 'react';

class CharacterList extends React.Component {
  render() {
    return (
      <ul>
      {this.props.data
      .filter(article=>{
        return article.name.toLocaleLowerCase().includes(this.props.campo.toLocaleLowerCase());
      })
      .map(item => {
        return (
          <li>
            <div>
              <img src={item.image} alt={item.name} />
              <h1>{item.name}</h1>
              <h4>{item.house}</h4>
            </div>
          </li>
        )
      })}
    </ul>
    );
  }
}

export default CharacterList;