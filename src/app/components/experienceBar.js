import React, {Component} from 'react';
import '../style/experience.scss';
import Store from '../store';

class ExperienceBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {store} = this.props;
    return (
      <div className="experience-bar">
        <div
          className="experience-bar-filler"
          style={{width: `${(store.get('exp') / store.get('expRequired')) * 100}%`}}
        >
          <span className="experience-text">
            {store.get('exp')}/{store.get('expRequired')}
          </span>
        </div>
      </div>
    );
  }
}

export default Store.withStore(ExperienceBar);
