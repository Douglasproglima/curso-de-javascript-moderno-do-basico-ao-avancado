import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  toast.success('Mensagem de Sucesso');
  toast.info('Mensagem de Informação');
  toast.warning('Mensagem de Aviso');
  toast.error('Mensagem de Erro');

  return (
    <Switch>
      {/* isClosed define que a rota está fechada para o acesso externo  */}
      {/* <MyRoute exact path="/" component={Login} isClosed /> */}
      <PrivateRoute exact path="/" component={Login} />
      <PrivateRoute path="*" component={Page404} />
    </Switch>
  );
}
