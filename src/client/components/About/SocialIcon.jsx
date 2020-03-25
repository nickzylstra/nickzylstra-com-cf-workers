import React from 'react';
import { Button } from 'react-bootstrap';

import styles from './SocialIcon.module.scss';

const SocialIcon = ({ url, viewBox, pathD }) => (
  <Button
    variant="outline-light"
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    <svg
      className={styles.SocialIcon}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={pathD} />
    </svg>
  </Button>
);

export default SocialIcon;
