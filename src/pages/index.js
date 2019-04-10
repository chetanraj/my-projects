import React from 'react';

import App from '../components/App';
import Projects from '../components/Projects';
import SEO from '../components/seo';

const IndexPage = () => (
  <App>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Projects />
  </App>
);

export default IndexPage;
