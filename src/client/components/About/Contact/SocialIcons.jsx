import React from 'react';
import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';
import MailIcon from './MailIcon';

import styles from './SocialIcons.module.scss';

const SocialIcons = () => (
  <div className={styles.SocialIconsContainer}>
    <div className={styles.SocialIcons}>
      <MailIcon />
      <GithubIcon />
      <LinkedInIcon />
    </div>
  </div>
);

export default SocialIcons;
