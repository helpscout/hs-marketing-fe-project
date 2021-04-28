import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container/Container';
import GetStartedCallout from '../components/GetStartedCallout/GetStartedCallout';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const HomePageContentDIV = styled.div`
  padding: 100px 0;
  width: 100%;
  max-width: 700px;
`;

const HomePage = () => (
  <Layout>
    <Seo
      description="This is the Help Scout home page"
      title="Help Scout | Home Page"
    />
    <Container>
      <HomePageContentDIV>
        <h1 className="display">Simplified customer&nbsp;service</h1>
        <p className="text-large">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
      </HomePageContentDIV>
    </Container>
    <GetStartedCallout />
  </Layout>
);

export default HomePage;
