import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

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

    dispatch({
      type: 'FISICA_JURIDICA',
    });
  }

  return (
    <Container>
      <Title isRed={false}>
        Login
        <hr />
        <br />
        <small>TESTE</small>
      </Title>
      <Paragrafo>Douglas Lima.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
