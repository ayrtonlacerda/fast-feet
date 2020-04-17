import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container,
  Title,
  SearchandButton,
} from './styles';
import { InputSearch, Tables, Button, Loader, Modal } from '../../components';
import { useFetch } from '../../Hooks';
import { useModal } from '../../zustand';
import Endpoint from '../../services';

const ListOrders = () => {
  const { show } = useModal();
  const [data, loading] = useFetch(Endpoint.getOrders);
  return (
  <Container showModal={show} h={ data && data.length >= 8 ? data.length : 0  }>
    <Title>
      Gerenciado Encomendas
    </Title>
    <SearchandButton>
      <InputSearch placeholder='Buscar por encomendas' />
      <Link to='/form/orders' style={{ textDecoration: 'none' }}>
        <Button text='CADASTRAR' iconPlus />
      </Link>
    </SearchandButton> 
    {loading && !data && <Loader />}   
    <Tables data={data || []} table='orders' />
    <Modal />
  </Container>
)};

export default ListOrders;
