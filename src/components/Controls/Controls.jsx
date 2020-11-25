import React from 'react';
import PropTypes from 'prop-types';
import { StyledControls } from './Controls.styles';
import  Button  from '../shared/Button';

const Controls = ({onLeaveFeedback}) => {
  const buttonsArr = [
    {
      id: "good",
      caption: "Good"
    },
    {
      id: "neutral",
      caption: "Neutral"
    },
    {
      id: "bad",
      caption: "Bad"
    },

]
  return(
    <StyledControls>
          {buttonsArr.map( ({id, ...rest}) =>
            <Button key={id} id={id} {...rest} handleClick = {onLeaveFeedback}/>
          )}
    </StyledControls>
  )
};

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  // bla: 'test',
};

export default Controls;
