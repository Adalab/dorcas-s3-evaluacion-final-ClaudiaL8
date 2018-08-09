import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import Filters from './Filters';

class CharacterList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Filters valueInput={this.props.valueInput} />
        <div className="div__characterList">
          <ul className="characterList">
            {this.props.data
              .filter(article => {
                return article.name.toLocaleLowerCase().includes(this.props.campo.toLocaleLowerCase());
              })
              .map(function (item) {
                return (
                  <li className="itemsList">
                    <Link to={`/CharacterCardDetails/${item.id}`}>
                      <CharacterCard item={item} />
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default CharacterList;