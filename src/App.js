import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Root from './LoginComponents/Root';

function App() {
  // const store = createStore();
  return (
    // <Provider store={store}>
      <Root />
    // </Provider>
  );
}

export default App;
