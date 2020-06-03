import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME-DO-APP',
      storage,
      whitelist: ['newNameReducerAlias'], // Chave definada dentro do rootReducer no export default
    },
    reducers
  );

  return persistedReducers;
};
