const initialState = {
  btnCliked: false,
};

// Reducer -> Responsavel por escutar as ações sendo disparada e dependendo da ação disparada ele irá executar outra ação
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FISICA_JURIDICA': {
      const newState = { ...state };
      newState.isFisicaJuridica = !newState.isFisicaJuridica;
      return newState;
    }

    default:
      return state;
  }
}
