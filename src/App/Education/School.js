import React from 'react';
import PropTypes from 'prop-types';

import colors from 'lib/colors';

const styles = {
  container: {
    display: 'flex',
  },
  name: {
    fontWeight: 'bold',
  },
  markerIcon: {
    marginRight: '4px',
    color: colors.primary,
  },
};

const School = props => (
  <div style={styles.container}>
    <div>
      <p style={styles.name}>
        {props.name}
      </p>
      <p>
        {props.dateRange}
      </p>
    </div>
    <div>
      <p>
        {props.studies}
      </p>
      <p>
        <i
          style={styles.markerIcon}
          className="mdi mdi-map-marker"
        />
        {props.location}
      </p>
    </div>
  </div>
);

School.propTypes = {
  name: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  studies: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default School;
