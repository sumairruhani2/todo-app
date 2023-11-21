import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './MainPage';

function App() {
  return (
    <MainPage />
  );
}

export default App;