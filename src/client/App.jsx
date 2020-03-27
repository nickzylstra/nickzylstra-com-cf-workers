import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from './components/Header';

import './App.scss';
import styles from './App.module.scss';


const Live = lazy(() => import('./components/Live/Live'));
const Works = lazy(() => import('./components/Works/Works'));
const About = lazy(() => import('./components/About/About'));


// eslint-disable-next-line no-unused-vars
const App = ({ host }) => (
  <div className={styles.app} aria-label="app">
    <Router>
      <Header />
      <main className={styles['container-page']}>
        <Suspense fallback={<Spinner data-testid="spinner" animation="border" />}>
          <Switch>
            <Route exact path="/">
              <Live />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </Router>
  </div>
);

export default App;
