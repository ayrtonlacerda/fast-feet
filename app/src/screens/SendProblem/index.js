import React, { useState, useCallback, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
  Header, Input, Button,
} from 'components';
import { useHandleFetch } from 'hooks';
import Endpoint from 'services';
import { Container, MainContainer } from './styles';

const SendProblem = () => {
  const route = useRoute();
  const { id } = route.params;
  const { user } = useSelector((state) => state.auth);
  const [description, setDescription] = useState('');
  const {
    handleFecth, loading, response, resetFetch, Error,
  } = useHandleFetch(id);

  const hadleClick = useCallback(() => {
    handleFecth(Endpoint.postProblem, {
      description,
      orderId: id,
      deliverymanId: user.id,
    });
  }, [description, loading]);

  useEffect(() => {
    if (response.success) {
      resetFetch();
    }
  }, [response, loading]);

  return (
    <Container>
      <Header title="Informar problema" />
      <MainContainer>
        <Input
          big
          placeholder="Descreva seu problema..."
          handleChangeText={setDescription}
          value={description}
        />
        <Button
          loading={loading}
          text="Enviar"
          colorButton="select"
          margin={0}
          handleClick={hadleClick}
        />
      </MainContainer>
      <Error />
    </Container>
  );
};

export default SendProblem;
