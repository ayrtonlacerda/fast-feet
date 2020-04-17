import { all } from 'redux-saga/effects';
import { authSagas } from './auth/saga';

export default function* rootSaga() {
  return yield all([ ...authSagas]);
}
// return yield all([...authSagas, ...shelfSagas]);