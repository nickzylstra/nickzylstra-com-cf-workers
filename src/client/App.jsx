import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';


const Home = lazy(() => import('./components/Home/Home.jsx'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));

const theme = {
  variant: 'dark',
  bg: 'dark',
};

// eslint-disable-next-line no-unused-vars
const App = ({ host }) => (
  <div className={styles.app} aria-label="app">
    <Router>
      <Header theme={theme} />
      <main className={styles['container-page']}>
        <Suspense fallback={<Spinner data-testid="spinner" animation="border" />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
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
