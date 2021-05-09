import React from 'react';
import GetStartedCallout, {GET_STARTED_CALLOUT_THEMES} from '../../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../../components/Layout/Layout';
import Seo from '../../../components/Seo/Seo';
import HeroSection from '../../../components/HeroSection/HeroSection';

import SeoImg from '../../../../static/images/integrations/seo/help-desk-integration--meta.png';

const HubspotPage = () => (
  <Layout>
    <Seo
      description="Connect Help Scout with HubSpot. By connecting HubSpot with Help Scout, you can easily bring contextual information on your customers"
      title="Integrate Hubspot with Help Scout"
      image={SeoImg}
    />
    <HeroSection 
      headline="Integrate Hubspot with Help Scout" 
      subheadline="HubSpot gives you the ability to create contacts, company, and deal records." 
      imgFileName="help-desk-integration--hero.png"
      imgAlt="HubSpot integration"
    />

    <GetStartedCallout theme={GET_STARTED_CALLOUT_THEMES.INDIGO} />
  </Layout>
);

export default HubspotPage;