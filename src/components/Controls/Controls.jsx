import React from 'react';
import PropTypes from 'prop-types';
import { StyledControls } from './Controls.styles';
import  Button  from '../shared/Button';

const Controls = ({onLeaveFeedback}) => (
  <StyledControls>
        <Button caption="Good" handleClick = {()=> onLeaveFeedback('good')}></Button>
        <Button caption="Neutral" handleClick = {()=> onLeaveFeedback('neutral')}></Button>
        <Button caption="Bad" handleClick = {()=> onLeaveFeedback('bad')}></Button>
  </StyledControls>
);

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  // bla: 'test',
};

export default Controls;
