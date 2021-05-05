import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import { BREAKPOINTS } from '../../constants';
import IntegrationCardList from '../../components/IntegrationCardList/IntegrationCardList';
import GetStartedCallout from '../../components/GetStartedCallout/GetStartedCallout';
import { GET_STARTED_CALLOUT_THEMES } from '../../components/GetStartedCallout/GetStartedCallout.constants.js';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';

import SeoImage from '../../../static/images/integrations/seo/screenshot.png';
import HeroImage from '../../../static/images/integrations/help-desk-integration--hero.png';

//might consider adding this as a prop to Layout, since there might be other pages that use this bg
const GradientBg = styled.div`
  position: absolute;
  top: 0;
  width:100%;
  height:100%;
  background-image: linear-gradient(180deg, #F9F9FF 20.69%, rgba(249, 249, 255, 0) 100%);
  background-size:cover; 
`;

const IntegrationHeroBg = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  right:0;
  background:url(${HeroImage}) no-repeat 122% top;
  background-size: 60%;
  @media (max-width: 1090px) {
    background-size: 46%;
  }
  @media (max-width: ${BREAKPOINTS.L}) {
    display:none;
  }
   @media (min-width: 1600px) {
    background-size: 50%;
  } 
`;

const IntegrationPageContentDIV = styled.div`
  padding: 100px 0;
  width: 100%;
  max-width: 700px;
  @media (max-width: ${BREAKPOINTS.M}) {
    padding: 30px 0;
  }
  
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
        

        <IntegrationCardList />

      </Container>
      <GetStartedCallout 
        theme={GET_STARTED_CALLOUT_THEMES.ILLO}
        />

    </Layout>
  );
}

export default IntegrationPage;
