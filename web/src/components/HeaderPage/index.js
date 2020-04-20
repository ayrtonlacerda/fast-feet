import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  InputSearch, 
  Button, 
} from '../index';
import { 
  SearchandButton, 
  ButtonsContainer, 
  Title,
  TitleContainer,
} from './styles';

const attr = {
  order: {
    route: '/form/orders',
    text: 'Buscar encomendas',
  },
  deliveryman:  {
    route: '/form/deliverymans',
    text: 'Buscar entregadores',
  },
  recipient:  {
    route: '/form/recipients',
    text: 'Buscar destinatarios',
  },
}

const HeaderPage = ({ title, handleSearch, page, form, handleOnSave }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!form && search.length <= 3) {
      handleSearch(null)
    }
  }, [search]);

  if (form) {
    return (
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
    );
  }

  return (
    <>
      <Title>{title}</Title>
      <SearchandButton>
        <InputSearch 
          placeholder={attr[page].text} 
          handleOnChange={setSearch} 
          value={search} 
        />
        {search.length > 3 ? (
          <Button 
            text='BUSCAR' 
            outline 
            handleClick={() => handleSearch(search)}
          />
        ) : (
          <Link to={attr[page].route} style={{ textDecoration: 'none' }}>
            <Button text='CADASTRAR' iconPlus />
          </Link>
        )}
            
      </SearchandButton>   
    </>    
  );
};

export default HeaderPage;