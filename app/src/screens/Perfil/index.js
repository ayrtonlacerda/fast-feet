import React from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { ImageAvatar, Button } from 'components';
import {
  Container, Text, Title, StatusBar,
} from './styles';

const Perfil = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container>
      <StatusBar />
      <ImageAvatar name={user.name} avatar={user.avatar.url} big />
      <Text>Nome completo</Text>
      <Title>{user.name}</Title>
      <Text>Email</Text>
      <Title>{user.email}</Title>
      <Text>Data de cadastro</Text>
      <Title>{format(new Date(user.createdAt), 'dd/MM/yyyy')}</Title>
      <Button colorButton="delete" text="Logout" doubleMargin />
    </Container>
  );
};


export default Perfil;
