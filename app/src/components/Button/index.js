import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';

const Input = ({
  text, colorButton, doubleMargin, handleClick, margin,
}) => (
  <Container
    doubleMargin={doubleMargin}
    color={colorButton || 'confirm'}
    onPress={handleClick}
    margin={margin}
  >
    <Title>{text}</Title>
  </Container>
);

Input.propTypes = {
  text: PropTypes.string.isRequired,
  colorButton: PropTypes.string,
  doubleMargin: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Input.defaultProps = {
  colorButton: 'confirm',
  doubleMargin: false,
};

export default Input;
