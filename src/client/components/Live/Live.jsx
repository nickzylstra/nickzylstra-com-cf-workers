import React from 'react';
import Scene from './Scene/Scene';

import styles from './Live.module.scss';


const Live = () => (
  <div className={styles.Live} aria-label="live-page">
    <Scene />
  </div>
);

export default Live;
