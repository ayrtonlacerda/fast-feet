import { takeEvery, put, call } from 'redux-saga/effects';
import storage from '@react-native-community/async-storage';
import { Types } from '../rootTypes';
import { AuthActions } from './ducks';
import Endpoints from '../../services';

function* handleAuth(action) {
  try {
    const { email } = action.payload;
    console.log({ email2: email });
    const response = yield call(Endpoints.login, email);
    console.log({ data: response.data });
    storage.setItem('@user_data', JSON.stringify(response.data));
    yield put(AuthActions.authSuccess(response.data));
  } catch (error) {
    console.log({ error: error.response.data });
    yield put(AuthActions.authFailure(error.response.data));
  }
}

function* watchAuth() {
  yield takeEvery(Types.AUTH_REQUEST, handleAuth);
}

export const authSagas = [
  watchAuth(),
];
