import { Types } from '../rootTypes';

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
}

export default function auth(state = initialState, action) {
  switch (action.type) {    
    case Types.AUTH_REQUEST:
      return {
        ...state,
        loading: false,
        token: null,
        error: false,
      };
    case Types.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        token: null,
        error: action.payload.error,
      };
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        error: false,
      };
    case Types.AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
        user: null,
        error: false,
      };
    default: 
      return {
        ...state,
      }
  }
};

export const AuthActions = {
  authRequest: (email, password) => ({
    type: Types.AUTH_REQUEST,
    payload: {
      email,
      password,
    }
  }),
  authFailure: error => ({
    type: Types.AUTH_FAILURE,
    payload: {
      error
    }
  }),
  authSuccess: (user, token) => ({
    type: Types.AUTH_SUCCESS,
    payload: {
      user,
      token,
    }
  }),
  authLogout: () => ({
    type: Types.AUTH_LOGOUT,
  })
};