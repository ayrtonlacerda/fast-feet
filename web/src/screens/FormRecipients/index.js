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
import { Input, Button, Loader } from '../../components';
import { useFormData } from '../../Hooks';
import Endpoint from '../../services';

const schemaStore = {
  name: {
    required: true,
    type: 'name',
  },
  street: {
    required: true,
    type: 'text',
  },
  number: {
    required: true,
    type: 'number',
  },
  city: {
    required: true,
    type: 'text',
  },
  state: {
    required: true,
    type: 'text',
  },
  complement: {
    required: true,
    type: 'text',
  },
  cep: {
    required: true,
    type: 'cep',
  }
}

const schemaPut = {
  name: {
    required: false,
    type: 'name',
  },
  street: {
    required: false,
    type: 'text',
  },
  number: {
    required: false,
    type: 'number',
  },
  city: {
    required: false,
    type: 'text',
  },
  state: {
    required: false,
    type: 'text',
  },
  complement: {
    required: false,
    type: 'text',
  },
  cep: {
    required: false,
    type: 'cep',
  }
}

const FormRecipients = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [cep, setCep] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  useEffect(() => {
    if(item) {
      setCep(item.cep);
      setName(item.name);
      setCity(item.city);
      setState(item.state);
      setStreet(item.street);
      setNumber(item.number);
      setComplement(item.complement);
    }
  }, []);

  const [handleOnSave, loading, error] = useFormData({
    cep,
    name,
    city,
    state,
    street,
    number: parseInt(number, 10),
    complement
  }, Endpoint.postRecipient, Endpoint.putRecipient, item, schemaStore, schemaPut);

  return (
    <Container>
      <TitleContainer>
        <Title>Cadastro de Destinatário</Title>
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
          <Input 
            padding 
            title='Nome' 
            value={name} 
            handleOnChange={setName}
            placeholder='Ludwig van Beethoven'
            error={error}
            name='name'
          />
          <SelectContainer>
            <Input 
              padding 
              title='Rua' 
              name='street'
              error={error}
              value={street}
              handleOnChange={setStreet}
              placeholder='Rua Beethoven'
            />
            <Input 
              padding 
              name='number'
              title='Número'
              error={error} 
              value={number} 
              handleOnChange={setNumber}
              small
              placeholder='1729'
            />
            <Input 
              padding
              error={error}
              name='complement'
              title='Complemento' 
              value={complement} 
              handleOnChange={setComplement}
              small
              placeholder=''
            />
          </SelectContainer>
          <SelectContainer>
            <Input 
              padding
              name='city'
              error={error}
              title='Cidade' 
              value={city} 
              handleOnChange={setCity}
              placeholder='Diadema'
            />
            <Input 
              padding
              name='state'
              error={error}
              title='Estado' 
              value={state} 
              handleOnChange={setState}
              placeholder='São Paulo'
            />
            <Input 
              padding
              name='cep'
              title='CEP' 
              value={cep}
              error={error}
              handleOnChange={setCep}
              placeholder='09960-580'
            />
          </SelectContainer>
        
        </MainContainer>
      )}
    </Container>
  );
};

export default FormRecipients;