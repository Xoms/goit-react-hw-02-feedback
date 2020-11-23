import React from 'react';
import PropTypes from 'prop-types';

const StatisticsItem = ({caption, val, percent}) => (
  <li className="statistics__item">
      <span className="statistics__caption">{caption}: {val} {percent && '%'}</span>
  </li>
);

StatisticsItem.propTypes = {
  caption: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
  percent: PropTypes.bool
};

StatisticsItem.defaultProps = {
  percent: false,
};

export default StatisticsItem;
