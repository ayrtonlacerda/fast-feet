import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  console.log({ reducers });
  const persistedReducer = persistReducer({
    key: 'fastfeet',
    storage,
    whitelist: ['auth'],
  }, reducers);

  return persistedReducer;
};
