import PropTypes from 'prop-types';

const Display = ({ output }) => (
  <div className="display">{ output }</div>
);

Display.propTypes = {
  output: PropTypes.number.isRequired,
};

export default Display;
