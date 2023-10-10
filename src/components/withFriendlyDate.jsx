import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

export default function withFriendlyDate(Component) {
  class WrappedComponent extends React.Component {
    static propTypes = {
      date: PropTypes.string.isRequired,
    };
    getFriendlyDateString = date => {
      if (moment().diff(moment(date), 'day') <= 25) {
        return moment(date).fromNow();
      }
      return `${moment().diff(moment(date), 'day')} дней назад`;
    }

    render() {
      const { date } = this.props;
      const friendlyDate = this.getFriendlyDateString(date);
      return <Component {...this.props} date={friendlyDate} />;
    }
  }

  WrappedComponent.displayName = `withFriendlyDate(${Component.displayName || Component.name})`;

  return WrappedComponent;
}
