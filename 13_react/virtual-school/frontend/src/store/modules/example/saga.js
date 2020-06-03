import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

// Simulando uma requisição asyncrona de API com Promise
const requestAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

function* exampleRequestAPI() {
  try {
    yield call(requestAPI); // Se houvesse parametros passaria depois do requestAPI com ,

    // Dispara ação para actions definidas no arquivo actions.js
    toast.success('DEU CERTO Modules/Example/Saga.JS');
    yield put(actions.btnClickedSucess());
  } catch (error) {
    toast.error('Deu erro Modules/Example/Saga.JS');
    yield put(actions.btnClickedFail());
  }
}

export default all([
  takeLatest(types.BTN_CLICKED_REQUEST, exampleRequestAPI),
  /*
  takeLatest(types.BTN_CLICKED_SUCESS, exampleRequestAPI1),
  takeLatest(types.BTN_CLICKED_FAIL, exampleRequestAPI2),
  */
]);
