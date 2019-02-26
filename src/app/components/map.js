import React, {Component} from 'react';
import {array} from 'prop-types';
import {getViewingArea} from '../../utilities';
import Tile from './tile';

class Map extends Component {
  renderTiles = () => {
    const {map, selectedPosition} = this.props;

    return getViewingArea(selectedPosition, map).map(area => {
      return area.map(({type, index, content, style}) => {
        return (
          <Tile
            type={type}
            selected={index.toString() === selectedPosition.toString()}
            key={index.toString()}
            content={content}
            style={style}
          />
        );
      });
    });
  };

  renderLoading = () => {
    return <span className="loading">Loading...</span>;
  };

  render() {
    const {map} = this.props;

    return (
      <div className="map-container">{map.length ? this.renderTiles() : this.renderLoading()}</div>
    );
  }
}

Map.propTypes = {
  map: array,
  selectedPosition: array,
};

export default Map;
