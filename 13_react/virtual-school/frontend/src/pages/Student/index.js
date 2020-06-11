import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { get } from 'lodash';
import { PropTypes } from 'prop-types';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';

export default function Student({ match }) {
  const id = get(match, 'params.id', 0);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSumit = e => {
    e.preventDefault();

    let formErrors = false;

    if(!id) return;

    if(name.length < 4 || name.length > 20) {
      formErrors = true;
      toast.error('O campo "Nome" precisa conter entre 4 há 20 caracteres.');
    }

    if(lastname.length < 4 || lastname.length > 20) {
      formErrors = true;
      toast.error('O campo "Sobrenome" precisa conter entre 4 há 20 caracteres.');
    }

    if(!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if(!isInt(String(age))) {
      formErrors = true;
      toast.error('Idade precisa ser um número inteiro.');
    }

    if(!isFloat(String(weight))) {
      formErrors = true;
      toast.error('Peso precisa ser um número inteiro ou decimal.');
    }

    if(!isFloat(String(weight))) {
      formErrors = true;
      toast.error('Altura precisa ser um número inteiro ou decimal.');
    }

    if(formErrors) return;

    try {

    } catch (err) {

    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h2>{id > 0 ? 'Editar' : 'Novo'} Aluno</h2>
      <hr></hr>

      <Form onSubmit={handleSumit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Endereço de e-mail"
        />
        <input
          type="number"
          value={age}
          min={7}
          max={100}
          maxLength="2"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Altura"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Idade"
        />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
