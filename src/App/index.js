import React from 'react';
import { Provider } from "react-redux";
import Application from './App';
import store from './store';


const App = () => (
    <Provider store={store}>
      <Application />
    </Provider>
  );

export default App;
