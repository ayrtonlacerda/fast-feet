import React from 'react'; import { Container } from './styles';
import Line from './Lines';

const Tables = ({ data = [], table }) =>{
  return (
  <Container>
    {data.length > 0 && <Line header itemParam={data[0]} table={table} />}    
    {data.map((item, index) => 
      <Line itemParam={item} table={table} index={index} />
    )}
  </Container>
)};

export default Tables;