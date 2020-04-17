import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container,
  Title,
  SearchandButton,
} from './styles';
import { InputSearch, Tables, Button, Loader } from '../../components';
import { useFetch } from '../../Hooks';
import Endpoint from '../../services';

const ListDeliverymans = () => {
  const [data, loading] = useFetch(Endpoint.getDeliverymans);
  return (
  <Container h={data && data.length > 8 ? data.length : 0 }>
    <Title>
      Gerenciando Entregadores
    </Title>
    <SearchandButton>
      <InputSearch placeholder='Buscar por entregadores' />
      <Link to='/form/deliverymans' style={{ textDecoration: 'none' }}>
        <Button text='CADASTRAR' iconPlus />
      </Link>
    </SearchandButton>
    {loading && !data && <Loader />}
    <Tables data={data || []} table='deliverymans' />
  </Container>
)};

export default ListDeliverymans;
