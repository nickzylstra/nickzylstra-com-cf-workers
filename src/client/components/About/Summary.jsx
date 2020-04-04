import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Summary = () => (
  <>
    <Image
      src="/assets/images/full/headshot2.jpg"
      roundedCircle
      alt="headshot"
      width="300"
      height="278"
    />
    <h1>
      I&apos;m Nick Zylstra
    </h1>
    <h2>
      <i>(nik ZIel-strah)</i>
    </h2>
    <article>
      <p>
        I like to learn, teach, and build things.
        <span role="img" aria-label="learn">💡</span>
        <span role="img" aria-label="teach">🔥</span>
        <span role="img" aria-label="build">🏗️</span>
      </p>
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
      <p>
        I&apos;ve coded most of my life.
        It started with a single line display computer my grandpa gave me at 8
        and things like scripting dragon skill training for Ultima Online while I slept at 15.
        Later on, coding turned into things like creating software tools streamlining the
        development of large construction projects, running Ethereum nodes,
        and customizing keyboard firmware.  Today I&apos;m building full stack web applications
        with technologies like React, Node.js, PostgreSQL, Docker, AWS, and Cloudflare.
      </p>
      <p>
        Why do I code?  Because it&apos;s really fun to me, plain and simple.
        The opportunity to constantly solve novel problems with new technologies
        means I&apos;m always learning.  And since most of these problems are digital,
        one can rapidly iterate through multiple concepts to find the best solution for
        the application. I find both of these aspects immensely satisfying and enjoyable.
      </p>
      <p>
        I made the switch from energy engineering to software engineering
        in pursuit of a new challenge - and I&apos;m loving every minute so far.
      </p>
      <p>
        You can check out my personal projects
        {' '}
        <Link to="/works">here</Link>
        .
      </p>
    </article>
  </>
);

export default Summary;
