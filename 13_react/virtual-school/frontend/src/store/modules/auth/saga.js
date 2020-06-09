import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';


import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    //const { email, password} = payload;
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.LoginSuccess({ ...response.data }));

    toast.success('Login realizado com sucesso.');

    //headr com o Beader Token
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    //payload.prevPath: Vem do pages/Login no dispatch(actions.loginRequest({...})) ->
    history.push(payload.prevPath);
  } catch (error) {
    toast.error('Usuário ou senha inválidos.');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate(payload) {
  try {
    const token = get(payload, 'auth.token'); //persistRehydrate
    if(!token) return;
      axios.defaults.headers.Authorization = `Bearer ${ token }`;
  } catch (error) {
    toast.error('');
  }
}

function registerRequest(payload) {
  const { name, email, password, id } = payload;
  console.log(payload);
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
