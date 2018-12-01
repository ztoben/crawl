import React, {Component} from 'react';
import Store from '../store';
import {Link} from 'react-router-dom';
import '../style/stats.scss';

class Stats extends Component {
  buildItemsTable = () => {
    const {store} = this.props;
    const items = store.get('items');

    return items.length === 0 ? (
      <tr>
        <td>No Items</td>
      </tr>
    ) : (
      items.map(({name, stat, effect}, idx) => {
        return (
          <tr key={idx}>
            <td>{name}</td>
            <td className={stat}>{`+${effect}`}</td>
          </tr>
        );
      })
    );
  };

  render() {
    const {store} = this.props;

    return (
      <div className="stats-container">
        <h2>s t a t s</h2>
        <div className="stats">
          <div className="stats-table-container">
            <table className="stats-table">
              <thead>
                <tr>
                  <th colSpan={2}>character</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>{store.get('name')}</td>
                </tr>
                <tr>
                  <td>class</td>
                  <td>{store.get('class')}</td>
                </tr>
                <tr>
                  <td>hp</td>
                  <td className="hp">{store.get('hp')}</td>
                </tr>
                <tr>
                  <td>mp</td>
                  <td className="mp">{store.get('mp')}</td>
                </tr>
                <tr>
                  <td>atk</td>
                  <td className="atk">{store.get('atk')}</td>
                </tr>
                <tr>
                  <td>def</td>
                  <td className="def">{store.get('def')}</td>
                </tr>
                <tr>
                  <td>satk</td>
                  <td className="satk">{store.get('satk')}</td>
                </tr>
                <tr>
                  <td>sdef</td>
                  <td className="sdef">{store.get('sdef')}</td>
                </tr>
              </tbody>
            </table>
            <table className="items-table">
              <thead>
                <tr>
                  <th colSpan={2}>items</th>
                </tr>
              </thead>
              <tbody>{this.buildItemsTable()}</tbody>
            </table>
          </div>
          <Link to="/">new game</Link>
        </div>
      </div>
    );
  }
}

export default Store.withStore(Stats);
