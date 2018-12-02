import React, {Component} from 'react';
import {object} from 'prop-types';

const miniMapStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: 15,
};

class MiniMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: true,
    };
  }

  toggleMiniMap = () =>
    this.setState({
      shown: !this.state.shown,
    });

  render() {
    const {miniMapPng} = this.props;
    const {shown} = this.state;
    const style = {
      textAlign: 'center',
      margin: 0,
      cursor: 'pointer',
      borderTop: '4px solid white',
      borderLeft: shown ? '2px solid white' : '4px solid white',
      borderRight: shown ? '2px solid white' : '4px solid white',
      borderBottom: shown ? 'none' : '4px solid white',
      width: shown ? '192px' : '188px',
      background: 'lightgray',
      color: 'black',
      padding: 2,
    };

    return (
      <div style={miniMapStyle}>
        <h5 onClick={this.toggleMiniMap} style={style}>{`[${shown ? '-' : '+'}] minimap`}</h5>
        {shown && (
          <img
            alt="minimap"
            width={200}
            height={200}
            src={`data:image/png;base64,${miniMapPng.getBase64()}`}
          />
        )}
      </div>
    );
  }
}

MiniMap.propTypes = {
  miniMapPng: object,
};

export default MiniMap;
