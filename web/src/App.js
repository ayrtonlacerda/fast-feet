import React, { useEffect, useCallback } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routers from './router';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import history from './router/history';
import { api } from './services';
import { AuthActions } from './store/auth/ducks';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const retriveUser = useCallback(async () => {
    const data = await localStorage.getItem('@fastfeet_user');
    console.log({ data })
    if (data) {
      const { user, token } = JSON.parse(data);
      api.defaults.headers.Authorization = `Bearer ${token}`;
      store.dispatch(AuthActions.authSuccess(user, token));
    }
  }, [])

  useEffect(() => {
    retriveUser();
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate loading persistor={persistor}>
        <Router history={history}>
          <Routers />
          <ToastContainer autoClose={4000} />
        </Router>
      </PersistGate>      
    </Provider>    
  );
}

export default App;
