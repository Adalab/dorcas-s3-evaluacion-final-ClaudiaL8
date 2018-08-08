import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

class CharacterList extends React.Component {
  render() {
    return (
      <ul className="characterList">
      {this.props.data
      .filter(article=>{
        return article.name.toLocaleLowerCase().includes(this.props.campo.toLocaleLowerCase());
      })
      .map (function (item,index) {
        return (
          <li>
            <Link to={`/CharacterCardDetails/${index}`}>{item.name}</Link>
            <CharacterCard item={item} />
          </li>
        )
      })}
    </ul>
    );
  }
}

export default CharacterList;