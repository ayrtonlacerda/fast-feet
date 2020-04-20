import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title, MenuContainer, Button, TextButton } from './styles';
import { MdEdit, MdVisibility, MdDeleteForever, MdPlayForWork } from 'react-icons/md';
import { useHandleFetch } from '../../Hooks';
import { colors } from '../../styles';
//import history from '../../router/history';
import { useModal } from '../../zustand';
import Endpoint from '../../services';

const atr = {
  problems: {
    route: '/form/problems',
    cancel: Endpoint.putProblems,
  },
  orders: {
    route: '/form/orders',
    delete: Endpoint.deleteOrders,    
  },
  deliverymans: {
    route: '/form/deliverymans',
    delete: Endpoint.deleteDeliverymans, 
  },
  recipients: {
    route: '/form/recipients'
  },
}

const Options = ({ 
  header, tables, item
}) => {
  const history = useHistory();
  const [handleFecth, loading, response, resetFetch] = useHandleFetch();
  const { setShow, setContent } = useModal();
  const [open, setOpen] = useState(false);

  const handleEdit = useCallback(() => {
    history.push(atr[tables].route, { item })
  }, [])

  const handleShow = useCallback(() => {
    setShow();
    setContent({...item, tables});
  }, [item])

  const handleDelete = useCallback(() => {
    // deletar entregador so se nao tiver entrega
    if (tables === 'problems') {
      handleFecth(atr[tables].cancel, {
        canceled_at: new Date(),
      }, item.id);
    } else {
      handleFecth(atr[tables].delete, {}, item.id);      
    }
   window.location.reload(); // ???
   
  }, [item])

  const handleWithdraw = useCallback(() => {
    history.push('/form/withdraw', { item })
    //window.location.reload();
  }, [item])

  return (
    <Container 
      onClick={() => setOpen(!open)} 
      header      
    >     
      <Title header={header}>...</Title>
      {open && (
        <MenuContainer  tables={tables}>
          {(tables === 'orders') && (
            <Button border onClick={handleWithdraw}>
              <MdPlayForWork 
                size={23}
                color={colors.GREEN}
                style={{
                  marginLeft: -5,
                  marginRight: 10
                }}
              />
              <TextButton>Retirar</TextButton>
            </Button>
          )}
          {(tables === 'orders' || tables === 'problems') && (
            <Button border onClick={handleShow}>
              <MdVisibility 
                size={15}
                color={colors.PURPLE}
                style={{
                  marginRight: 10
                }}
              />
              <TextButton>Visualizar</TextButton>
            </Button>
          )}
          {tables !== 'problems' && (
            <Button border onClick={handleEdit}>
              <MdEdit 
                size={15}
                color={colors.BLUE}
                style={{
                  marginRight: 10
                }}
              />
              <TextButton>Editar</TextButton>
            </Button>
          )}
          {tables !== 'recipients' && (
            <Button big={tables === 'problems'} onClick={handleDelete}>
              <MdDeleteForever 
                size={15}
                color={colors.RED}
                style={{
                  marginRight: 10
                }}
              />
              <TextButton>{tables === 'problems' ? 'Cancelar encomenda' : 'Excluir'}</TextButton>
            </Button>
          )}  
        </MenuContainer>
      )}
    </Container>
  )
};

export default Options;