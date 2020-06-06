import React, { useState }  from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSumit = e => {
    e.preventDefault();
    let formErrors = false;

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if(password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('O campo Senha precisa conter entre 6 há 50 caracteres.');
    }

    if(formErrors) return;

    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <hr></hr>
      <Form onSubmit={handleSumit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Endereço de e-mail"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
