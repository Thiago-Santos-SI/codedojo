import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Routes from "./routes";
import store from "./store";

//import NormalLoginForm from './Components/Login';

function App() {
  return (
      <Provider store={store}>
        <Routes/>
      </Provider>
);
}

export default App;
