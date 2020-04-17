/* eslint-disable react-native/no-raw-text */
import React from 'react';
import {
  Container, Ball, Line, ContentContainer, Title,
} from './styles';

const Progress = ({ withdrawal, delivered }) => (
  <Container>
    <ContentContainer>
      <Ball filled />
      <Line />
      <Ball filled={withdrawal} />
      <Line />
      <Ball filled={delivered} />
    </ContentContainer>
    <ContentContainer space>
      <>
        <Title>Aguardando</Title>
      </>

      <Title>Retirada</Title>
      <Title>Entregue</Title>
    </ContentContainer>

  </Container>
);

export default Progress;
