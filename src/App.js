import React from 'react'
import Home from './Component/Homepage/Home';
import { Provider } from 'react-redux';
import store from './Component/Redux-Toolkit/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  )
}

export default App;

