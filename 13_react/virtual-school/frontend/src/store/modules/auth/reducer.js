import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// Reducer -> Responsavel por escutar as ações sendo disparada e dependendo da ação disparada ele irá executar outra ação
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload)
      return state;
    }

    case types.LOGIN_SUCCESS: {
      return state;
    }

    case types.LOGIN_FAILURE: {
      console.log('Reducer Success');
      return state;
    }

    default:
      return state;
  }
}
