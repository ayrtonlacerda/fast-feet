import React from 'react';
import { format } from 'date-fns';
import {
  Container, ContentContainer, InfoContainer, Text, Title, TextButton,
} from './styles';
import TitleIcon from '../TitleIcon';
import Progress from './Progress';

const Card = ({
  onClickShowDetails, product, createdAt, recipient, start_date, end_date, item,
}) => (
  <Container>
    <TitleIcon title={product} />
    <Progress withdrawal={start_date} delivered={end_date} />
    <ContentContainer>
      <InfoContainer>
        <Text>Data</Text>
        <Title>{format(new Date(createdAt), 'dd/MM/yyyy')}</Title>
      </InfoContainer>
      <InfoContainer>
        <Text>Cidade</Text>
        <Title>{recipient.city}</Title>
      </InfoContainer>
      <TextButton
        onPress={() => onClickShowDetails(item)}
      >
        Ver detalhes
      </TextButton>
    </ContentContainer>
  </Container>
);

export default Card;
