import React from 'react';
import { Button } from 'react-bootstrap';
import theme from '../../../theme';

import styles from './SocialIcon.module.scss';

const SocialIcon = ({ url, viewBox, pathD }) => (
  <Button
    variant={`${theme.variant}`}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
    className={styles.SocialButton}
  >
    <svg
      className={styles.SocialIcon}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={styles.SocialIconPath} d={pathD} />
    </svg>
  </Button>
);

export default SocialIcon;
