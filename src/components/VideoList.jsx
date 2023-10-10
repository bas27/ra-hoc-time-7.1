import PropTypes from 'prop-types';
import Video from './Video';

const VideoList = ({list}) => {
  return list.map((item, i) => <Video key={i} url={item.url} date={item.date} />);
};

VideoList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  )
};

export default VideoList;