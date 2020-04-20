import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { 
  Container,
  Title,
  MainContainer,
  TitleContainer,
  ButtonsContainer,
  Limit,
  Text,
} from './styles';
import { Button, Loader } from '../../components';
import { useFormData } from '../../Hooks';
import Endpoint from '../../services';
import history from '../../router/history';

const schemaStore = {
  recipient_id: {
    required: true,
    type: 'number',
  },
  deliveryman_id: {
    required: true,
    type: 'number',
  },
  product: {
    required: true,
    type: 'text'
  }
};

const schemaPut = {
  recipient_id: {
    required: false,
    type: 'number',
  },
  deliveryman_id: {
    required: false,
    type: 'number',
  },
  product: {
    required: false,
    type: 'text'
  }
};

const Withdraw = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const { item } = location.state || {};

  const [handleOnSave, loading, error] = useFormData(
    { 
      start_date: new Date(),
      deliverymanId: user.id,
      orderId: item.id,
    }, '', Endpoint.putOrders, item, '', schemaPut);

  const handleClick = useCallback(() => {
    handleOnSave();
    history.goBack();
  });

  return (
    <Container>
      <TitleContainer>
        <Title>Retirar Encomendas</Title>
        <ButtonsContainer>
          <Button 
            iconBack 
            text='VOLTAR' 
            grey 
            goBack
          />
        </ButtonsContainer>
      </TitleContainer>
      {loading ? <Loader />: (
        <MainContainer>
          <Text>{`O entregadodor(ra) ${item.deliveryman.name} esta retirando o produto ${item.product} para a ${item.recipient.name}`} </Text>
          <Limit>
            <Button
              iconCheck
              text='CONFIRMAR'
              leftMangin 
              handleClick={handleClick}
            />
          </Limit>          
        </MainContainer> 
      )}
    </Container>
  );
};

export default Withdraw;