import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSumit(e) {
    e.preventDefault();
    let formErrors = false;

    if(name.length < 3 || name.length > 30)
    {
      formErrors = true;
      toast.error('O campo Nome precisa conter entre 4 há 20 caracteres.');
    }

    if(!isEmail(email))
    {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if(password.length < 6 || password.length > 50)
    {
      formErrors = true;
      toast.error('O campo Senha precisa conter entre 6 há 50 caracteres.');
    }

    if(formErrors) return;

    try {
      await axios.post('/users/', {
        name, email, password,
      });

      toast.success('Usuário registrado com sucesso.');
      history.push('/login');
    } catch (e) {
      const errors =  get(e, 'response.data.errors', []);
      errors.map(error => toast.error(error));
    }

  }

  return (
    <Container>
      <h1>Criar Conta</h1>
      <hr></hr>
      <Form onSubmit={handleSumit}>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={name} onChange={e => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Endereço de e-mail"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar grátis</button>
        <hr />
      </Form>
    </Container>
  );
}
