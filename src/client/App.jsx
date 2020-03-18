import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.jsx';
import Home from './components/Home/Home.jsx';

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
      <Router>
        <Header theme={theme} />
        <Container bsPrefix="container-page">
          nickzylstra.com with CICD pipeline deploy
          <Switch>
            <Route path="/portfolio">
              portfolio
            </Route>
            <Route path="/about">
              about
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
