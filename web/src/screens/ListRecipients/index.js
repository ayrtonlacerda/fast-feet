import React, { useState } from 'react';
import { Container } from './styles';
import { Tables, Loader, HeaderPage } from '../../components';
import { useFetch } from '../../Hooks';
import Endpoint from '../../services';

const ListRecipients = () => {
  const [query, setQuery] = useState();
  const [data, loading] = useFetch(Endpoint.getRecipients, query);
  return (
    <Container h={data && data.length >= 8 ? data.length : 0 }>
      <HeaderPage 
        title="Gerenciando Destinatarios" 
        page='recipient' 
        handleSearch={setQuery}
      />
      {loading && !data && <Loader />}
      <Tables data={data || []} table='recipients' />
    </Container>
  )
};

export default ListRecipients;
