import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container/Container';
import IntegrationCalloutList from '../../components/IntegrationCalloutList/IntegrationCalloutList';
import GetStartedCallout from '../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';

import SeoImage from '../../../static/images/integrations/seo/screenshot.png';

const IntegrationPageContentDIV = styled.div`
  padding: 100px 0;
  width: 100%;
  max-width: 700px;
  border:solid red 2px;
`;

const IntegrationCalloutsDIV = styled.div`
  border: solid red 2px;  
`;

const IntegrationPage = () => {
  return (
    <Layout>
      <Seo
        description="This is the Help Scout integrations page"
        title="Help Scout | Integrations"
        image={SeoImage}
      />
      <Container>
        <IntegrationPageContentDIV>
          <h1 className="display">Help Scout, supercharged</h1>
          <p className="text-large">The tools you love, together with Help Scout.</p>
        </IntegrationPageContentDIV>

        <IntegrationCalloutsDIV>
          <IntegrationCalloutList />
        </IntegrationCalloutsDIV>
      </Container>
      <GetStartedCallout />
    </Layout>
  );
}

export default IntegrationPage;
