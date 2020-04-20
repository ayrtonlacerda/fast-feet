import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './styles';
import Loader from '../Loader';

const Input = ({
  text, colorButton, doubleMargin, handleClick, margin, loading,
}) => (
  <Container
    doubleMargin={doubleMargin}
    color={colorButton || 'confirm'}
    onPress={handleClick}
    margin={margin}
  >
    {loading ? <Loader white /> : <Title>{text}</Title>}
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
