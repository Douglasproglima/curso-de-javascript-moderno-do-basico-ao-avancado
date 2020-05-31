import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({
  component: Component,
  isClosed,
  ...restProperties
}) {
  const isLoggeIn = false; // Vai estar presente dentro do estado do Redux

  if (isClosed && !isLoggeIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPath: restProperties.location.pathname },
        }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...restProperties} component={Component} />;
}

// Define o vlr padrão
PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,

  isClosed: PropTypes.bool,
};
