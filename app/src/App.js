import React, { useEffect, useCallback, useState } from 'react';
import Routes from 'routes';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import storage from '@react-native-community/async-storage';
import { AuthActions } from 'store/auth/ducks';
import { store, persistor } from './store';

const safeAreaStyle = {
  flex: 1,
  backgroundColor: '#fff',
};
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const retriveUser = useCallback(async () => {
    const response = await storage.getItem('@user_data');
    console.log({ store, AuthActions });
    setAuthenticated(JSON.parse(response));
    store.dispath(AuthActions.authSuccess(JSON.parse(response)));
  }, []);
  useEffect(() => {
    retriveUser();
  }, []);
  store.dispatch(AuthActions.authSuccess(authenticated));
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={safeAreaStyle}>
          <Routes authenticated={authenticated || store.getState().auth.user} />
        </SafeAreaView>
      </PersistGate>
    </Provider>

  );
};

export default App;
