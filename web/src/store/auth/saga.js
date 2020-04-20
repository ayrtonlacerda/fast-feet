import { takeEvery, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { Types } from '../rootTypes';
import { AuthActions } from './ducks';
import Endpoints, { api } from '../../services';

function* handleAuth(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(Endpoints.login, { email, password });
    const { user, token} = response.data;
    yield localStorage.setItem('@fastfeet_user', JSON.stringify(response.data));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(AuthActions.authSuccess(user, token));
  } catch (error) {
    toast.error('Houve um problema, por favor confira email e senha')
    yield put(AuthActions.authFailure(error.response.data));
  }
}

function* handleLogout(action) {

}

function* watchAuth() {
  yield takeEvery(Types.AUTH_REQUEST, handleAuth);
}

function* watchLogout() {
  yield takeEvery(Types.AUTH_LOGOUT, handleLogout);
}

export const authSagas = [
  watchAuth(),
  watchLogout(),
];