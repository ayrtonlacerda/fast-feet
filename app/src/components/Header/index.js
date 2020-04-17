import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container, StatusBar, TitleContiner, Title, BackIcon, SlapHole, Button,
} from './styles';

const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar />
      <TitleContiner>
        <Button onPress={() => navigation.goBack()}>
          <BackIcon />
        </Button>
        <Title>{title}</Title>
        <SlapHole />
      </TitleContiner>
    </Container>
  );
};

export default Header;
