import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import AboutPageStyles from '../utils/styles/pages/about.styles';

const pageName = 'About';

const About = () => (
  <Layout title={pageName}>
    <div className="back-link">
      <Link href="/">Back to Home</Link>
    </div>
    <style jsx>
      {AboutPageStyles}
    </style>
  </Layout>
);

export default About;
