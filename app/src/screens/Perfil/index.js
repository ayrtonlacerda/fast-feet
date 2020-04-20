import React, { useCallback } from 'react';
import { format } from 'date-fns';
import { ImageAvatar, Button } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import storage from '@react-native-community/async-storage';
import { AuthActions } from 'store/auth/ducks';
import {
  Container, Text, Title, StatusBar,
} from './styles';

const Perfil = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleExit = useCallback(() => {
    dispatch(AuthActions.authLogout());
    storage.clear();
  }, []);

  return (
    <Container>
      <StatusBar />
      <ImageAvatar name={user.name} avatar={user.avatar && user.avatar.url} big />
      <Text>Nome completo</Text>
      <Title>{user.name}</Title>
      <Text>Email</Text>
      <Title>{user.email}</Title>
      <Text>Data de cadastro</Text>
      <Title>{format(new Date(user.createdAt), 'dd/MM/yyyy')}</Title>
      <Button
        colorButton="delete"
        text="Logout"
        doubleMargin
        handleClick={handleExit}
      />
    </Container>
  );
};


export default Perfil;
