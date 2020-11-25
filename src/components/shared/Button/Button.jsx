import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

const Button = (props) => {
  const { id, caption, handleClick } = props
  return (
  <Btn type="button"  onClick={()=>handleClick(id)}> 
    {caption}
  </Btn>
)};

Button.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  id: '',
  caption: '',
  handleClick: () => {}
};

export default Button;
