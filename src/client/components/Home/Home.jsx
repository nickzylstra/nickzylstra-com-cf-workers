import React from 'react';
import Scene from './Scene/Scene';

import styles from './Home.module.scss';


const Home = () => (
  <div className={styles.Home} aria-label="home-page">
    <Scene />
  </div>
);

export default Home;
