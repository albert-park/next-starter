import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Row from '../components/Row';
import IndexStyles from '../utils/styles/pages/index.styles';

import cardLinks from '../utils/data/links.js';

const pageName = 'Home';

const Home = () => (
  <Layout title={pageName}>
    <Row>
      {cardLinks.slice(0, 1).map((link) => (
        <Link
          key={link.headline}
          href={link.link}
        >
          <a className="card">
            <h3>{link.headline}</h3>
            <p>{link.body}</p>
          </a>
        </Link>
      ))}
    </Row>

    <Row>
      <h2>Documentation Links (External)</h2>
      {cardLinks.slice(1, 4).map((link) => (
        <Link
          key={link.headline}
          href={link.link}
        >
          <a className="card">
            <h3>{link.headline}</h3>
            <p>{link.body}</p>
          </a>
        </Link>
      ))}
    </Row>

    <style jsx>
      {IndexStyles}
    </style>
  </Layout>
);

export default Home;
