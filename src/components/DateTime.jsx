import PropTypes from 'prop-types';
import withFriendlyDate from './withFriendlyDate';

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
};

const DateTimePretty = withFriendlyDate(DateTime);


export {DateTimePretty};
export default DateTime;