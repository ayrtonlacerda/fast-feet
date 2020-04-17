import React, { useState } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom';
import { 
  Container,
  Logo,
  LeftContainer,
  RightContainer,
  Divider,
  TextItem,
  AdminText,
  ExitText,
} from './styles';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <LeftContainer>
        <Logo />
        <Divider />
        <Link to='/list/orders' style={{ textDecoration: 'none' }}>
          <TextItem select={
            pathname === '/list/orders' || 
            pathname ==='/form/orders'}
          >
            ENCOMENDAS
          </TextItem>
        </Link>
        <Link to='/list/deliverymans' style={{ textDecoration: 'none' }}>
          <TextItem select={
            pathname === '/list/deliverymans' || 
            pathname === '/form/deliverymans'}
          >
            ENTREGADORES
          </TextItem>
        </Link>
        <Link to='/list/recipients' style={{ textDecoration: 'none' }}>
          <TextItem select={
            pathname === '/list/recipients' || 
            pathname === '/form/recipients'}
          >
            DESTINATÁRIOS
          </TextItem>
        </Link>
        <Link to='/list/problems' style={{ textDecoration: 'none' }}>
          <TextItem select={
            pathname === '/list/problems' ||
            pathname === '/form/problems'}
          >
            PROBLEMAS
          </TextItem>
        </Link>
      </LeftContainer>
      <RightContainer>
        <AdminText>Admin FastFeet</AdminText>
        <ExitText>sair do sistema</ExitText>
      </RightContainer>
    </Container>
)};

export default Header;
