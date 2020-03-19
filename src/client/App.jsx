import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import Header from './components/Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const Home = lazy(() => import('./components/Home/Home.jsx'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));

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
        <Container as="main" bsPrefix="container-page">
          <Suspense fallback={<Spinner animation="border" />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/about" component={About} />
            </Switch>
          </Suspense>
        </Container>
      </Router>
    </div>
  );
};

export default App;
