import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import persistReducers from './rootPersist';
 
import reducers from './rootReducer';
import sagas from './rootSaga';

//const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistReducers(reducers), composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
