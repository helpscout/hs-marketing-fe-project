import React from 'react';
import { Link } from 'gatsby';

import Container from '../../components/Container/Container';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';

const FourOhFourPage = () => (
  <Layout>
    <Seo
      description="The page you're trying to reach has not been found"
      robots="noindex,nofollow"
      title="404! Page not found | Help Scout"
    />
    <Container>
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p><Link to="/">Back to home page</Link></p>
    </Container>
  </Layout>
);

export default FourOhFourPage;
