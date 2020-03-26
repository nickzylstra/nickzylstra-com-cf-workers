import React from 'react';
import { Container } from 'react-bootstrap';
import GithubIcon from './GithubIcon.jsx';
import LinkedInIcon from './LinkedInIcon.jsx';
import MailIcon from './MailIcon.jsx';

import styles from './SocialIcons.module.scss';

const SocialIcons = () => (
  <Container className={styles.SocialIconsContainer}>
    <div className={styles.SocialIcons}>
      <GithubIcon />
      <LinkedInIcon />
      <MailIcon />
    </div>
  </Container>
);

export default SocialIcons;
