import React from 'react';
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';
import { StyledStat } from './Statistics.styles';

const Statistics = (props) => {
  const {
    good, 
    neutral, 
    bad, 
    total, 
    positivePercentage 
  } = props

  return( 
      <StyledStat className="statistics">
        {total ? <>
        <StatisticsItem caption="Good" val={good}/>
        <StatisticsItem caption="Neutral" val={neutral}/>
        <StatisticsItem caption="Bad" val={bad}/>
        <StatisticsItem caption="Total" val={total}/>
        <StatisticsItem caption="Positive percentage" val={positivePercentage} percent/>
        </> : <li>No feedback given</li>
        }
        
      </StyledStat> 
  )
};

Statistics.propTypes = {
    good:  PropTypes.number, 
    neutral:  PropTypes.number, 
    bad:  PropTypes.number, 
    total:  PropTypes.number, 
    positivePercentage:  PropTypes.number 
};

Statistics.defaultProps = {
  // bla: 'test',
};

export default Statistics;
