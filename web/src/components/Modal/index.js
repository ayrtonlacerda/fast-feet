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
  Image
} from './styles';
import { useModal } from '../../zustand';

const Modal = () => {
  const { show, content, setShow } = useModal();

  console.log({ content })
  if (!show) {
    return null;
  }

  const infoProduct = () => (
    <>
      <Title>Produto</Title>
      <Text>{content.product}</Text>
      <Divider />
      <Title>Informações da encomenda</Title>
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
      <Title>Assinatura do destinatario</Title>
      {content.signature ? <Image src={content.signature.url} /> : (
        <Text>Produto ainda não entregue...</Text>
      )}
        
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
