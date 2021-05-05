import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container/Container';
import IntegrationCalloutList from '../../components/IntegrationCalloutList/IntegrationCalloutList';
import GetStartedCallout from '../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';

import SeoImage from '../../../static/images/integrations/seo/screenshot.png';
import HeroImage from '../../../static/images/integrations/help-desk-integration--hero.png';


//consider adding this as a prop to Layout, since there might be other pages that use this bg
const GradientBg = styled.div`
  position: absolute;
  top: 0;
  width:100%;
  height:100%;
  background: linear-gradient(180deg, #F9F9FF 20.69%, rgba(249, 249, 255, 0) 100%);
  background-size:100% 92%; 
`;

const IntegrationHeroBg = styled.div`
  border:solid blue 1px;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  right:0;
  background:url(${HeroImage}) no-repeat right top;
  background-size: 50%;
`;

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
        description="This is the Help Scout Integrations page"
        title="Help Scout | Integrations"
        image={SeoImage}
      />
      <GradientBg />
      <IntegrationHeroBg />
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
