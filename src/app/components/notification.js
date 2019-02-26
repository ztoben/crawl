import React, {Component} from 'react';
import {bool, func, string, object} from 'prop-types';
import '../style/notification.scss';

class Notification extends Component {
  buildType = () => {
    const {type} = this.props;

    switch (type) {
      case 'alert':
        return 'Alert';
      case 'warning':
        return 'Warning';
      case 'info':
        return 'Information';
      default:
        return '';
    }
  };

  render() {
    const {shown, notification, dismissHandler} = this.props;

    return shown ? (
      <div className="notification-container">
        <div className="notification-area">
          <h2>{this.buildType()}</h2>
          <hr />
          <div className="notification-content">
            {notification}
            <button onClick={dismissHandler}>Close</button>
          </div>
        </div>
      </div>
    ) : null;
  }
}

Notification.propTypes = {
  type: string,
  shown: bool,
  dismissHandler: func,
  notification: object,
};

export default Notification;
