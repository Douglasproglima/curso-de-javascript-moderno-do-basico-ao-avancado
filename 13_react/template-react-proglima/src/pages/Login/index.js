import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

import axios from '../../services/axios';

export default function Login() {
  React.useEffect(() => {
    async function getDate() {
      const response = await axios.get('/students/');
      const { data } = response;
      console.log(data);
    }

    getDate();
  }, []);

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.isFisicaJuridica());
    dispatch(exampleActions.btnClickedRequest());
    dispatch(exampleActions.btnClickedSucess());
    dispatch(exampleActions.btnClickedFail());
  }

  const selectors = useSelector(
    (state) => state.newNameReducerAlias.btnClickedRequest,
    (state) => state.newNameReducerAlias.btnClickedSuccess,
    (state) => state.newNameReducerAlias.btnClickedFail
  );

  return (
    <Container>
      <Title isRed={false}>
        Title
        <hr />
        <br />
        <small>{selectors ? 'Success' : ''}</small>
      </Title>
      <Paragrafo>React Base (pages/login/index).</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
