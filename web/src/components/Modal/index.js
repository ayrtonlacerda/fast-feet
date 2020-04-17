import React from 'react';
import { format } from 'date-fns';
import { 
  Container,
  MainContainer,
  RowContainer,
  Divider,
  Title,
  Text,
  DateTitle,
} from './styles';
import { useModal } from '../../zustand';

const Modal = () => {
  const { show, content, setShow } = useModal();

  if (!show) {
    return null;
  }

  const infoProduct = () => (
    <>
     <Title>informações da encomenda</Title>
      <Text>{`${content.recipient.street}, ${content.recipient.number}`}</Text>
      <Text>{`${content.recipient.city}, ${content.recipient.state}`}</Text>
      <Text>{content.recipient.cep}</Text>
      <Divider />
      <Title>Datas</Title>
      <RowContainer>
        <DateTitle>Retirada: </DateTitle>
        <Text>{format(new Date(content.startAt || null), 'dd/MM/yyyy')}</Text>
      </RowContainer>
      <RowContainer>
        <DateTitle>Entrega: </DateTitle>
        <Text>{format(new Date(content.deliveryAt || null), 'dd/MM/yyyy')}</Text>
      </RowContainer>
      <Divider />
      <Text>assinatura</Text>
    </>
  );
  const infoProblem = () => (
    <>
      <Title>Visualizar Problema</Title>
      <Text>{content.description}</Text>
    </>
  );

  return (
    <Container onClick={setShow}>
      <MainContainer>
       {content.tables === 'problems'
          ? infoProblem()
          : infoProduct()
        }
      </MainContainer>
    </Container>
  )
};

export default Modal;
