import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';
import { WrapperContainer } from '../components';

import {
  SignIn,
  ListOrders,
  ListProblems,
  ListRecipients,
  ListDeliverymans,
  FormOrders,
  FormRecipients,
  FormDeliverymans,
} from '../screens';

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={() => <SignIn />} />
        <Route 
          path='/list/orders' 
          exact 
          component={() => <WrapperContainer><ListOrders /></WrapperContainer>}
          isPrivate 
        />
        <Route 
          path='/list/deliverymans' 
          exact 
          isPrivate
          component={() => (
            <WrapperContainer>
              <ListDeliverymans />
            </WrapperContainer>
          )}
          
        />
        <Route 
          path='/list/recipients' 
          exact 
          isPrivate
          component={() => (
            <WrapperContainer>
              <ListRecipients />
            </WrapperContainer>
          )} 
        />
        <Route 
          path='/list/problems' 
          exact 
          isPrivate
          component={() => (
            <WrapperContainer>
              <ListProblems />
            </WrapperContainer>
          )} 
        />
        <Route 
          path='/form/orders' 
          exact 
          isPrivate
          component={() => <WrapperContainer><FormOrders /></WrapperContainer>} 
        />
        <Route 
          path='/form/deliverymans' 
          exact 
          isPrivate
          component={() => (
            <WrapperContainer>
              <FormDeliverymans />
            </WrapperContainer>
          )} 
        />
        <Route 
          path='/form/recipients' 
          exact 
          isPrivate
          component={() => (
            <WrapperContainer>
              <FormRecipients />
            </WrapperContainer>
          )} 
        />
      </Switch>
    </BrowserRouter>
  );
}
