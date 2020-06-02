import * as types from '../types';

const initialState = {
  isFisicaJuridica: false,
  btnClickedSuccess: false,
  btnClickedFail: false,
  btnClickedRequest: false,
};

// Reducer -> Responsavel por escutar as ações sendo disparada e dependendo da ação disparada ele irá executar outra ação
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FISICA_JURIDICA: {
      const newState = { ...state };
      newState.isFisicaJuridica = !newState.isFisicaJuridica;
      return newState;
    }

    case types.BTN_CLICKED_REQUEST: {
      return state;
    }

    case types.BTN_CLICKED_SUCESS: {
      console.log('Reducer Success');
      return state;
    }

    case types.BTN_CLICKED_FAIL: {
      console.log('Reducer Erro');
      return state;
    }

    default:
      return state;
  }
}
