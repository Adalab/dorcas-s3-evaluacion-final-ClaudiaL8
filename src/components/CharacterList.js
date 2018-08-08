import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import Filters from './Filters';

class CharacterList extends React.Component {
  render() {
    return (
      <div>
      <Filters valueInput={this.props.valueInput} />
      <ul className="characterList">
      {this.props.data
      .filter(article=>{
        return article.name.toLocaleLowerCase().includes(this.props.campo.toLocaleLowerCase());
      })
      .map (function (item,index) {
        return (
          <li>
            <Link to={`/CharacterCardDetails/${index}`}>
            <CharacterCard item={item} />
            </Link>
          </li>
        )
      })}
    </ul>
    </div>
    );
  }
}

export default CharacterList;