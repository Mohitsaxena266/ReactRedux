/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Home from './src/containers/HomeContainer';
//
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/services/reducers/index';
const store = createStore(rootReducer);

console.log('store Value is ', store);
//
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
