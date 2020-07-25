import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Root from './LoginComponents/Root';
import { loginReducers } from './LoginComponents/loginReducers';
import { signUp } from './LoginComponents/loginSagas';


function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(loginReducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(signUp);

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
