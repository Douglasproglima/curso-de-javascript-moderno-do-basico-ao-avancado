import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { myPersistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={myPersistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            className="toast-container"
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;