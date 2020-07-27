import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Root from './LoginComponents/Root';
import { loginReducers } from './LoginComponents/loginReducers';
import { signUp, logIn } from './LoginComponents/loginSagas';

/*Css imports*/
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(loginReducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(signUp);
  sagaMiddleware.run(logIn);

  return (
    <Provider store={store}>
      <div className="main-body">
        <Root />
      </div>
    </Provider>
  );
}

export default App;
