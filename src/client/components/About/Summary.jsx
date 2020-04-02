import React from 'react';
// import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Summary = () => (
  <>
    <br />
    <h2>
      <span role="img" aria-label="wave">👋</span>
    </h2>
    <br />
    {/* <Image src="/assets/images/full/headshot.jpeg" crossOrigin="anonymous" alt="headshot" /> */}
    <h1>
      I&apos;m Nick Zylstra
      <i> (ZIel-strah)</i>
    </h1>
    <br />
    <h3>
      I like to learn, teach, and build things.
      <span role="img" aria-label="learn">💡</span>
      <span role="img" aria-label="teach">🔥</span>
      <span role="img" aria-label="build">🏗️</span>
    </h3>
    <br />
    <p>
      The first 11 years of my career were at
      {' '}
      <a href="https://www.mckinstry.com" target="_blank" rel="noopener noreferrer">McKinstry</a>
      , making facilities energy efficient.
      Soon I start at
      {' '}
      <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>
      , building a better internet.
    </p>
    <br />
    <p>
      You can check out my personal projects
      {' '}
      <Link to="/works">here</Link>
      .
    </p>
    <br />
  </>
);

export default Summary;
