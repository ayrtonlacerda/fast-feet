import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Container,
  Title,
  MainContainer,
  SelectContainer,
  TitleContainer,
  ButtonsContainer,
} from './styles';
import { CustomSelect, Input, Button, Loader } from '../../components';
import { useFetch, useFormData } from '../../Hooks';
import Endpoint from '../../services';

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

const FormOrders = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [name, setName] = useState('');
  const [recipient, setRecipient] = useState({});
  const [deliveryman, setDeliveryman] = useState({});  
  const [deliverymanData] = useFetch(Endpoint.getDeliverymans);
  const [recipientData] = useFetch(Endpoint.getRecipients);

  useEffect(() => {
    if(item) {
      setRecipient(item.recipient.id);
      setDeliveryman(item.deliveryman.id);
      setName(item.product)
    }
  }, []);

  const [handleOnSave, loading, error] = useFormData({
    product: name,
    recipient_id: recipient,
    deliveryman_id: deliveryman
  }, Endpoint.postOrders, Endpoint.putOrders, item, schemaStore, schemaPut);

  return (
    <Container>
      <TitleContainer>
        <Title>Cadastro de Encomendas</Title>
        <ButtonsContainer>
          <Button 
            iconBack 
            text='VOLTAR' 
            grey 
            goBack
          />
          <Button
            iconCheck
            text='SALVAR'
            leftMangin 
            handleClick={handleOnSave}
          />
        </ButtonsContainer>
      </TitleContainer>
      {loading ? <Loader />: (
        <MainContainer>
          <SelectContainer>
            <CustomSelect 
              title='Destinatário'
              onSelect={setRecipient}
              options={recipientData || []}
              id={recipient}    
            />
            <CustomSelect 
              title='Entregador'
              onSelect={setDeliveryman}
              options={deliverymanData || []}
              id={deliveryman}     
            />
          </SelectContainer>
          <Input 
            padding 
            title='Nome do Produto' 
            value={name} 
            name='product'
            error={error}
            handleOnChange={setName} 
          />
        </MainContainer> 
      )}
    </Container>
  );
};

export default FormOrders;