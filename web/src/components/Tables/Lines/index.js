import React from 'react';
import { Container } from './styles';
import { TextColumn, StatusColumn, } from '../Column';
import { 
  formattingOrders,
  formattingDeliverymans,
  formattingRecipients,
  formattingProblems,
} from './formatting';

const Lines = ({ itemParam, header, table, index }) => {
  let show = [];
  if (table === 'orders') {
    show = formattingOrders(itemParam, header);
  } 
  if (table === 'deliverymans') {
    show = formattingDeliverymans(itemParam, header);
  } 
  if (table === 'recipients') {
    show = formattingRecipients(itemParam, header);
  } 
  if (table === 'problems') {
    show = formattingProblems(itemParam, header);
  } 
  return (
    <Container header={header}>
      {header && show.map(item =>
        <TextColumn header {...item}/>
      )}
      {!header && show.map(item => ( item.status ? (
        <StatusColumn status={item.status} text={item.name} />
      ) : (
        <TextColumn {...item} item={itemParam} index={index} table={table}/>
      )))}
    </Container>
  )
  
};

export default Lines;