import React from 'react';
import { Link } from 'react-router-dom';


const Summary = () => (
  <>
    <br />
    <h2>
      <span role="img" aria-label="wave">👋</span>
    </h2>
    <br />
    <h3>
      I&apos;m Nick Zylstra
      <i> (ZIel-strah)</i>
    </h3>
    <br />
    <h4>
      I like to learn, teach, and build things.
      <span role="img" aria-label="learn">💡</span>
      <span role="img" aria-label="teach">🔥</span>
      <span role="img" aria-label="build">🏗️</span>
    </h4>
    <br />
    <h5>
      The first 11 years of my career were at
      {' '}
      <a href="https://www.mckinstry.com" target="_blank" rel="noopener noreferrer">McKinstry</a>
      , making facilities energy efficient.
      Soon I start at
      {' '}
      <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>
      , building a better internet.
    </h5>
    <br />
    <h5>
      You can check out my personal projects
      {' '}
      <Link to="/works">here</Link>
      .
    </h5>
    <br />
  </>
);

export default Summary;
