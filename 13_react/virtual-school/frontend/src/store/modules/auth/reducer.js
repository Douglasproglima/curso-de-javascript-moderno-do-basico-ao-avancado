import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: { },
  isLoading: false,
};

// Reducer -> Responsavel por escutar as ações sendo disparada e dependendo da ação disparada ele irá executar outra ação
export default function(state = initialState, action) {
  //Seta os dados do header e coloca os dados no state

  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;

      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState};
      return newState;
    }

    case types.LOGIN_REQUEST: {
      const newState = { ...state};
      newState.isLoading =  true;
      return newState;
    }

    default:
      return state;
  }
}
