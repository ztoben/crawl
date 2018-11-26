import React, {Component} from 'react';
import {array} from 'prop-types';
import {getViewingArea, isArrayEqual} from '../../utilities';
import Tile from './tile';

class Map extends Component {
  renderTiles = () => {
    const {map, selectedPosition} = this.props;

    return getViewingArea(selectedPosition, map).map((row, idx) => {
      return (
        <div className="row" key={idx}>
          {row.map(({type, index, content, style, discovered}) => {
            return (
              <Tile
                type={type}
                selected={isArrayEqual(selectedPosition, index)}
                key={index.toString()}
                content={content}
                style={style}
                discovered={discovered}
              />
            );
          })}
        </div>
      );
    });
  };

  render() {
    return <div className="map-container">{this.renderTiles()}</div>;
  }
}

Map.propTypes = {
  map: array,
  selectedPosition: array,
};

export default Map;
