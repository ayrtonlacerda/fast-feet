/* eslint-disable react-native/no-raw-text */
import React, { useCallback, useState, useEffect } from 'react';
import storage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { ImageAvatar, Card, Loader } from 'components';
import { useNavigation } from '@react-navigation/native';
import { useFetch } from 'hooks';
import Endpoint from 'services';
import { AuthActions } from 'store/auth/ducks';
import {
  Container,
  Header,
  HeaderInfo,
  HeaderText,
  DeliveryContainer,
  ButtomContainer,
  Text,
  Title,
  TextButton,
  ExitIcon,
  Button,
  FlatList,
  StatusBar,
} from './styles';

const Dashboard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [dataDelivery, setDataDelivery] = useState([]);
  const [delivery, setDelivery] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [data, loading] = useFetch(Endpoint.getProcess, user.id, refresh);

  useEffect(() => {
    if (data) {
      setDataDelivery(data.filter((item) => item.end_date));
    }
  }, [data]);

  const handleShowDetails = useCallback((item) => {
    navigation.navigate('DetailOrder', item);
  }, []);

  const handleExit = useCallback(() => {
    dispatch(AuthActions.authLogout());
    storage.clear();
  }, []);

  console.log({ data, dataDelivery });
  return (
    <Container>
      <StatusBar />
      <Header>
        <HeaderInfo>
          <ImageAvatar name={user.name} avatar={user.avatar && user.avatar.url} />
          <HeaderText>
            <Text>Bem vindo de volta,</Text>
            <Title>{user.name}</Title>
          </HeaderText>
        </HeaderInfo>
        <Button>
          <ExitIcon onPress={handleExit} />
        </Button>
      </Header>
      <DeliveryContainer>
        <Title>Entregas</Title>
        <ButtomContainer>
          <TextButton
            onPress={() => setDelivery(!delivery)}
            selected={!delivery}
          >
            Pendentes
          </TextButton>
          <TextButton
            onPress={() => setDelivery(!delivery)}
            selected={delivery}
          >
            Entregues
          </TextButton>
        </ButtomContainer>
      </DeliveryContainer>
      {loading
        ? <Loader big />
        : (
          <FlatList
            onRefresh={() => setRefresh(!refresh)}
            refreshing={loading}
            data={delivery
              ? dataDelivery
              : data && data.filter((item) => !item.end_date)}
            renderItem={({ item }) => (
              <Card
                onClickShowDetails={handleShowDetails}
                item={item}
                {...item}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
    </Container>
  );
};


export default Dashboard;
