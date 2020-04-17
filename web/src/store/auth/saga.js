import { takeEvery, put, call } from 'redux-saga/effects';
import { Types } from '../rootTypes';
import { AuthActions } from './ducks';
import Endpoints, { api } from '../../services';

function* handleAuth(action) {
  try {
    const { email, password } = action.payload;
    console.log({ email, password })
    const response = yield call(Endpoints.login, { email, password });
    console.log({ data: response.data })
    const { user, token} = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(AuthActions.authSuccess(user, token));
  } catch (error) {
    console.log({ error: error.response.data })
    yield put(AuthActions.authFailure(error.response.data));
  }
}

function* watchAuth() {
  yield takeEvery(Types.AUTH_REQUEST, handleAuth);
}

export const authSagas = [
  watchAuth(),
];