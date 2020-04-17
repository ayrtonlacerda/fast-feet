import React from 'react';
import { Container, Select, Title } from './styles';
// import { handleChangeValue } from '../../Hooks';


const CustomSelect = ({ options=[], onSelect, title, id }) => (
  <Container>
    <Title>{title}</Title>
    <Select onChange={event => onSelect(parseInt(event.target.value, 10))}>
      {options.map(item => (
        <option value={item.id} selected={item.id === id}>
          {item.name}
        </option>
      ))}
    </Select> 
  </Container> 
);

export default CustomSelect;
