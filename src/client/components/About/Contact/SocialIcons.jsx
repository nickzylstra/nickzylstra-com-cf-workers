import React from 'react';
import GithubIcon from './GithubIcon.jsx';
import LinkedInIcon from './LinkedInIcon.jsx';
import MailIcon from './MailIcon.jsx';

import styles from './SocialIcons.module.scss';

const SocialIcons = () => (
  <div className={styles.SocialIconsContainer}>
    <div className={styles.SocialIcons}>
      <GithubIcon />
      <LinkedInIcon />
      <MailIcon />
    </div>
  </div>
);

export default SocialIcons;
