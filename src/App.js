import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Root from './LoginComponents/Root';
import { loginReducers } from './LoginComponents/loginReducers';
import { signUp, logIn,logOut } from './LoginComponents/loginSagas';
import { donationReducers } from './DonationComponents/donationReducers';
import { donationEntrySubmit } from './DonationComponents/donationSagas';
import { addSuspect } from './CovidComponents/CovidSuspectSagas';
import { CovidSuspectReducers } from './CovidComponents/CovidSuspectReducers';

/*Css imports*/
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(combineReducers({loginReducers,donationReducers,CovidSuspectReducers}), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(signUp);
  sagaMiddleware.run(logIn);
  sagaMiddleware.run(logOut);
  sagaMiddleware.run(donationEntrySubmit);
  sagaMiddleware.run(addSuspect);

  return (
    <Provider store={store}>
      <div className="main-body">
        <Root />
      </div>
    </Provider>
  );
}

export default App;
