import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container/Container';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import IntegrationTemplate from '../../components/Integration/IntegrationTemplate';

import { BREAKPOINTS } from '../../constants';
import GetStartedCallout, { GET_STARTED_CALLOUT_THEMES } from '../../components/GetStartedCallout/GetStartedCallout';


const HelpDeskHeroSection = styled.section`
  margin-top: -90px;
`;

const HelpDeskWrapper = styled.div`
  padding-top: 90px;
  position: relative;
  overflow: hidden;
  &:before {
  	content: "";
	display: block;
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0) linear-gradient(rgb(249, 249, 255) 23.81%, rgba(249, 249, 255, 0) 100%) repeat scroll 0% 0%;
  }
`;
const HelpDeskStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  -moz-box-align: center;
  align-items: center;
  padding: 30px 0px 50px;
  @media (min-width: ${BREAKPOINTS.L}) {
   	 height: 30vw;
  	 max-height: 460px;
   }
`;
const HelpDeskHero = styled.div`
  width: 100%;
  max-width: 700px;
  @media (min-width: ${BREAKPOINTS.L}) {
   	 padding-top: 100px;
`;

const HelpDeskHeroIMG = styled.img`
  position: absolute !important;
  top: -90px;
  left: 50%;
  width: 49vw;
  max-width: 960px;
   @media (max-width: ${BREAKPOINTS.L}) {
   	display: none;
   }
`;

const HelpDeskIntegration = () => (
  <Layout>
    <Seo
      description="Connect with your favorite tools in one click! Help Scout Integrations let you bring chat, CRM, communication and ecommerce tools into a single platform."
      title="Help Scout Integrations: Connect Help Scout with 80+ Apps"
      image="/images/pages/help-desk-integration--hero.png?auto=compress&fit=scale&w=1600&dpr=1"
    />
   	 <HelpDeskHeroSection>
   	 	<HelpDeskWrapper>
	   	 	<Container>
		   	 	<HelpDeskStyle>
			      <HelpDeskHero>
			        <h1 className="display">Help Scout,&nbsp; supercharged</h1>
			        <p className="text-large">The tools you love, together with Help Scout.</p>
			        <HelpDeskHeroIMG src="/images/pages/help-desk-integration--hero.png?auto=compress&fit=scale&w=1600&dpr=1" alt="Help Scout Grip of Software" role="img" />
			      </HelpDeskHero>
		      </HelpDeskStyle>
		    </Container>
	    </HelpDeskWrapper>
      </HelpDeskHeroSection>
     <Container>
	     <IntegrationTemplate>
	    </IntegrationTemplate>
    </Container>
    <GetStartedCallout theme={GET_STARTED_CALLOUT_THEMES.ILLO} />
  </Layout>
);


export default HelpDeskIntegration;
