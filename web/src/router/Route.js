import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {store} from '../store';

const RouterWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const auth = useSelector(state => state.auth);
  //const { token } = auth;
  const token = true;


  if (!token && isPrivate) {
    return <Redirect to='/' />
  }

  if (token && !isPrivate) {
    return <Redirect to='/list/orders' />
  }

  return <Route {...rest} component={Component} />
}

export default RouterWrapper;