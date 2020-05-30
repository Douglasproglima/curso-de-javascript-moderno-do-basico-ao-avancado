import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <hr />
        <br />
        <small>TESTE</small>
      </Title>
      <Paragrafo>Douglas Lima.</Paragrafo>
    </Container>
  );
}
