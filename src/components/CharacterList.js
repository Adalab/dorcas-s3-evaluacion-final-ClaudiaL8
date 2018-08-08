import React from 'react';
import CharacterCard from './CharacterCard';

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
            <CharacterCard item={item} />
          </li>
        )
      })}
    </ul>
    );
  }
}

export default CharacterList;