import React from 'react';


const Summary = () => (
  <>
    <h2>
      hi
    </h2>
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
      , making buildings energy efficient.
      Soon I start at
      {' '}
      <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare</a>
      , building a better internet.
    </h5>
    <br />
  </>
);

export default Summary;
