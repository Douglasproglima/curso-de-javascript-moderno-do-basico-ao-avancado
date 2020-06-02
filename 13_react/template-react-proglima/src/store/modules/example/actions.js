import * as types from '../types';

export function isFisicaJuridica() {
  return {
    type: types.FISICA_JURIDICA,
  };
}

export function btnClickedRequest() {
  return {
    type: types.BTN_CLICKED_REQUEST,
  };
}

export function btnClickedSucess() {
  return {
    type: types.BTN_CLICKED_SUCESS,
  };
}

export function btnClickedFail() {
  return {
    type: types.BTN_CLICKED_FAIL,
  };
}
