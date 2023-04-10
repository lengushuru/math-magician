import PropTypes from 'prop-types';

const Display = ({ output }) => (
  <div className="display">{ output }</div>
);

Display.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Display;
