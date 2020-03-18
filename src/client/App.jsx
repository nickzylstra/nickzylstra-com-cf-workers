import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import './App.css';

const theme = {
  variant: 'dark',
  bg: 'dark',
};

// eslint-disable-next-line no-unused-vars
const App = ({ host }) => {
  const initTestState = 'init test state';
  // eslint-disable-next-line no-unused-vars
  const [testState, setTestState] = useState(initTestState);

  return (
    <div className="App" aria-label="app">
      <Header theme={theme} />
      nickzylstra.com with CICD pipeline deploy
      <Footer theme={theme} />
    </div>
  );
};

export default App;
