import React from 'react';
import './App.css';
import Routers from './router';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import history from './router/history';
import { api } from './services';


function App() {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2NzA0NTIyLCJleHAiOjE1ODczMDkzMjJ9.hq4kgcRlBBbYl742xhO7BSoBD_i3Y4qzcng5l7iQUto'
  api.defaults.headers.Authorization = `Bearer ${token}`;
  
  return (
    <Provider store={store}>
      <PersistGate loading persistor={persistor}>
        <Router history={history}>
          <Routers />
        </Router>
      </PersistGate>      
    </Provider>    
  );
}

export default App;
