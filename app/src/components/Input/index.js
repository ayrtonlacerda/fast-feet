import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';


const Input = ({
  placeholder, handleChangeText, value, big,
}) => (
  <Container
    placeholder={placeholder}
    onChangeText={handleChangeText}
    value={value}
    big={big}
    autoCapitalize="none"
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  big: PropTypes.bool,
  handleChangeText: PropTypes.func.isRequired,
};


Input.defaultProps = {
  big: false,
};


export default Input;
