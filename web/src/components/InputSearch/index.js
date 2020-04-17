import React from 'react';
import { Container, InputContainer, Title } from './styles';
import { MdSearch } from 'react-icons/md';
import { colors, metrics } from '../../styles';

const InputSearch = ({ title, placeholder }) => (
  <Container>    
    <MdSearch 
      size={25}
      color={colors.GREY}
      style={{
        marginLeft: 10
      }}
    />
    <InputContainer placeholder={placeholder} />
  </Container>
);

export default InputSearch;
