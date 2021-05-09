import React from 'react';

import GetStartedCallout, {GET_STARTED_CALLOUT_THEMES} from '../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import HeroSection from '../../components/HeroSection/HeroSection';
import Container from '../../components/Container/Container';
import IntegrationCards from '../../components/IntegrationCards/IntegrationCards';

import SeoImg from '../../../static/images/integrations/seo/help-desk-integration--meta.png';

const HelpDeskIntegrationPage = () => (
  <Layout>
    <Seo
      description="Connect with your favorite tools in one click! Help Scout Integrations let you bring chat, CRM, communication and ecommerce tools into a single platform."
      title="Help Scout Integrations: Connect Help Scout with 80+ Apps"
      image={SeoImg}
    />
    <HeroSection 
      headline="Help Scout, supercharged" 
      subheadline="The tools you love, together with Help Scout." 
      imgFileName="help-desk-integration--hero.png"
      imgAlt="Help Scout integrations"
    />
    <Container>
      <IntegrationCards />
    </Container>
    <GetStartedCallout theme={GET_STARTED_CALLOUT_THEMES.ILLO} />
  </Layout>
);

export default HelpDeskIntegrationPage;