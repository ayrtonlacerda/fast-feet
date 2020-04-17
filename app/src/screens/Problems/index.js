import React from 'react';
import { format } from 'date-fns';
import { Header } from 'components';
import { useRoute } from '@react-navigation/native';
import { useFetch } from 'hooks';
import Endpoint from 'services';
import {
  Container, MainContainer, Card, Title, Text,
} from './styles';

const Problem = () => {
  const route = useRoute();
  const { id, product } = route.params;
  const [data, loading] = useFetch(Endpoint.getProblem, id);
  console.log({ data, id });
  return (
    <Container>
      <Header title="Visualizar problemas" />
      <Title>{product}</Title>
      <MainContainer>
        {data && data.map((item) => (
          <Card>
            <Text big>{item.description}</Text>
            <Text>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</Text>
          </Card>
        ))}
      </MainContainer>
    </Container>
  );
};

export default Problem;
