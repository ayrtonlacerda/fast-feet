import React from 'react';
import { Container, InputContainer, Title, ErrorText } from './styles';
// import { handleChangeValue } from '../../Hooks';

const Input = ({ 
  name,
  type,
  title,
  value,
  small,
  padding,
  placeholder,
  handleOnChange,
  error,
}) => (
  <Container padding={padding} small={small}>
    <Title>{title}</Title>
    {error && error[name] && <ErrorText>{error[name]}</ErrorText>}
    <InputContainer 
      placeholder={placeholder}
      onChange={event => handleOnChange(event.target.value)}
      type={type}
      value={value}    
    />
  </Container>
);

export default Input;
