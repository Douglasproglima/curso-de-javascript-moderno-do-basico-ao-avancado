import React from 'react';
import { Container } from '../../styles/GlobalStyles';
import { ContainerLogin } from './styled';

export default function Login() {
  return (
    <Container>
      <ContainerLogin>
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
      <label for="tab-1" class="tab">Login</label>

      <input id="tab-2" type="radio" name="tab" class="sign-up" />
      <label for="tab-2" class="tab">Criar Conta</label>
      </ContainerLogin>
    </Container>
  );
}
