import React from 'react';
import { 
  Container,
  Title,
} from './styles';
import { Tables, Loader, Modal } from '../../components';
import { useFetch } from '../../Hooks';
import { useModal } from '../../zustand';
import Endpoint from '../../services';


const ListProblems = () => {
  const { show } = useModal();
  const [data, loading] = useFetch(Endpoint.getProblems);
  console.log({ data })
  return (
  <Container showModal={show} h={data && data.length > 8 ? data.length : 0 }>
    <Title>
      Problemas na entrega
    </Title>
    {loading && !data && <Loader />}
    <Tables data={data && data.problemsRespose || []} table='problems' />
    <Modal />
  </Container>
)};

export default ListProblems;
