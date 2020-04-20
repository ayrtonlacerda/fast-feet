import React, { useState } from 'react';
import { Container} from './styles';
import { Tables, Loader, HeaderPage } from '../../components';
import { useFetch } from '../../Hooks';
import Endpoint from '../../services';

const ListDeliverymans = () => {
  const [query, setQuery] = useState();
  const [data, loading] = useFetch(Endpoint.getDeliverymans, query);
  return (
  <Container h={data && data.length > 8 ? data.length : 0 }>
    <HeaderPage 
      title="Gerenciando Entregadores" 
      page='deliveryman' 
      handleSearch={setQuery}
    />
    {loading && !data && <Loader />}
    <Tables data={data || []} table='deliverymans' />
  </Container>
)};

export default ListDeliverymans;
