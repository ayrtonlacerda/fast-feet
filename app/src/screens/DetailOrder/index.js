/* eslint-disable camelcase */
/* eslint-disable react-native/no-raw-text */
import React, { useMemo, useCallback, useState } from 'react';
import { format } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header, TitleIcon, InfoModal } from 'components';
import {
  Container,
  MainContainer,
  ContentContainer,
  Title,
  Text,
  RowContainer,
  ColumnContainer,
  ButtonContainer,
  Divider,
  CheckIcon,
  CancelIcon,
  InfoIcon,
  Button,
  TextButton,
} from './styles';

const DetailOrder = () => {
  const route = useRoute();
  const [error, setError] = useState(false);
  const {
    product, recipient, start_date, end_date, canceled_at, id,
  } = route.params;
  console.log({ route });
  const navigation = useNavigation();

  const status = useMemo(() => {
    let stt = 'pendente';
    if (start_date) {
      stt = 'retirado';
    }
    if (end_date) {
      stt = 'entregue';
    }
    if (canceled_at) {
      stt = 'cancelado';
    }
    return stt;
  }, [start_date, end_date, canceled_at]);

  const handleConfirm = useCallback(() => {
    if (start_date) {
      navigation.navigate('Confirm', { id, product });
    } else {
      setError(true);
    }
  }, []);

  return (
    <Container>
      <Header title="Detalhes da encomenda" />
      <MainContainer>
        <ContentContainer>
          <TitleIcon title="Informações da entrega" />
          <Title>DESTINATÁRIO</Title>
          <Text>{recipient.name}</Text>
          <Title>ENDEREÇO</Title>
          <Text>{`${recipient.street},${recipient.city} - ${recipient.state}, ${recipient.cep}`}</Text>
          <Title>PRODUTO</Title>
          <Text>{product}</Text>
        </ContentContainer>
        <ContentContainer>
          <TitleIcon title="Situação da entrega" calendar />
          <Title>STATUS</Title>
          <Text>{status}</Text>
          <RowContainer>
            <ColumnContainer>
              <Title>DATA DA RETIRADA</Title>
              <Text>
                {start_date
                  ? format(new Date(start_date), 'dd/MM/yyyy')
                  : '--/--/--'}
              </Text>
            </ColumnContainer>
            <ColumnContainer>
              <Title>DATA DA ENTREGA</Title>
              <Text>
                {end_date
                  ? format(new Date(end_date), 'dd/MM/yyyy')
                  : '--/--/--'}
              </Text>
            </ColumnContainer>
          </RowContainer>
        </ContentContainer>
        <ButtonContainer>
          <Button onPress={() => navigation.navigate('SendProblem', { id, product })}>
            <CancelIcon />
            <TextButton>Informar</TextButton>
            <TextButton>Problema</TextButton>
          </Button>
          <Divider />
          <Button onPress={() => navigation.navigate('Problem', { id, product })}>
            <InfoIcon />
            <TextButton>Visualizar</TextButton>
            <TextButton>Problemas</TextButton>
          </Button>
          <Divider />
          <Button onPress={handleConfirm}>
            <CheckIcon />
            <TextButton>Confirmar</TextButton>
            <TextButton>Entrega</TextButton>
          </Button>
        </ButtonContainer>
      </MainContainer>
      <InfoModal
        error
        title="Error!"
        show={error}
        textButton="OK"
        handleClose={() => setError(false)}
        handleClickButton={() => setError(false)}
        msg="Voce não pode cofirma entrega sem retirar produto"
      />
    </Container>
  );
};

export default DetailOrder;
