import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from '../../store/auth/ducks';
import { Link, useLocation } from 'react-router-dom';
import history from '../../router/history';
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
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleClose = useCallback(() => {
    dispatch(AuthActions.authLogout());
  }, []);
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
        <Link to='/' style={{ textDecoration: 'none' }}>
          <ExitText onClick={handleClose}>sair do sistema</ExitText>
        </Link>
      </RightContainer>
    </Container>
)};

export default Header;
