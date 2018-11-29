import React, {Component} from 'react';
import Store from '../store';
import {Link} from 'react-router-dom';
import '../style/stats.scss';

class Stats extends Component {
  render() {
    const {store} = this.props;

    return (
      <div className="stats-container">
        <h2>s t a t s</h2>
        <div className="stats">
          <div className="stats-table-container">
            <table className="stats-table">
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
                  <td>{store.get('hp')}</td>
                </tr>
                <tr>
                  <td>mp</td>
                  <td>{store.get('mp')}</td>
                </tr>
                <tr>
                  <td>atk</td>
                  <td>{store.get('atk')}</td>
                </tr>
                <tr>
                  <td>def</td>
                  <td>{store.get('def')}</td>
                </tr>
                <tr>
                  <td>satk</td>
                  <td>{store.get('satk')}</td>
                </tr>
                <tr>
                  <td>sdef</td>
                  <td>{store.get('sdef')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/">new game</Link>
        </div>
      </div>
    );
  }
}

export default Store.withStore(Stats);
