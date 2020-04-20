import React, { useState } from 'react';
import { Container } from './styles';
import { 
  Tables,
  Loader, 
  Modal, 
  HeaderPage,
} from '../../components';
import { useFetch } from '../../Hooks';
import { useModal } from '../../zustand';
import Endpoint from '../../services';

const ListOrders = () => {
  const { show } = useModal();
  const [query, setQuery] = useState();
  const [data, loading] = useFetch(Endpoint.getOrders, query);
  
  return (
  <Container showModal={show} h={ data && data.length >= 8 ? data.length : 0  }>
    <HeaderPage
      handleSearch={setQuery}
      page='order' 
      title="Gerenciando Encomendas" 
    />
    {loading && !data && <Loader />}   
    <Tables data={data || []} table='orders' />
    <Modal />
  </Container>
)};

export default ListOrders;
