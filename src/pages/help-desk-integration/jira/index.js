import React from 'react';
import styled from 'styled-components';

import Container from '../../../components/Container/Container';
import GetStartedCallout from '../../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../../components/Layout/Layout';
import Seo from '../../../components/Seo/Seo';

const HomePageContentDIV = styled.div`
  padding: 100px 0;
  width: 100%;
  max-width: 700px;
`;

const jiraPage = () => (
  <Layout>
    <Seo
     description="This is the Help Scout Jira"
      title="Help Scout | Jira"
    />
    <Container>
      <HomePageContentDIV>
        <h1 className="display">Jira</h1>
        <p className="text-large">Jira Placeholder.</p>
      </HomePageContentDIV>
    </Container>
    <GetStartedCallout />
  </Layout>
);

export default jiraPage;
