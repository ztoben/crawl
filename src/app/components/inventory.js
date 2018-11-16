import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style/inventory.scss';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory-container">
        <h2>i n v e n t o r y</h2>
      </div>
    );
  }
}

Inventory.propTypes = {};

export default Inventory;
