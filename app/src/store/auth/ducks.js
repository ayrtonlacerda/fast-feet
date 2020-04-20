import { Types } from '../rootTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case Types.AUTH_REQUEST:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case Types.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload.error,
      };
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: false,
      };
    case Types.AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        error: false,
      };
    default:
      return state;
  }
}

export const AuthActions = {
  authRequest: (email) => ({
    type: Types.AUTH_REQUEST,
    payload: {
      email,
    },
  }),
  authFailure: (error) => ({
    type: Types.AUTH_FAILURE,
    payload: {
      error,
    },
  }),
  authSuccess: (user) => ({
    type: Types.AUTH_SUCCESS,
    payload: {
      user,
    },
  }),
  authLogout: () => ({
    type: Types.AUTH_LOGOUT,
  }),
};
