import React from 'react';
import {
 Container, Title, ImageTruck, CalendarIcon 
} from './styles';

const TitleIcon = ({ title, calendar }) => (
  <Container>
    {calendar ? <CalendarIcon /> : <ImageTruck />}

    <Title>{title}</Title>
  </Container>
);

export default TitleIcon;
