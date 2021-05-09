import React from 'react';
import GetStartedCallout, {GET_STARTED_CALLOUT_THEMES} from '../../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../../components/Layout/Layout';
import Seo from '../../../components/Seo/Seo';
import HeroSection from '../../../components/HeroSection/HeroSection';

import SeoImg from '../../../../static/images/integrations/seo/help-desk-integration--meta.png';

const SalesforcePage = () => (
  <Layout>
    <Seo
      description="Connect Help Scout with Salesforce. By integrating Salesforce with Help Scout, you can bring data where you need it most"
      title="Integrate Salesforce with Help Scout"
      image={SeoImg}
    />
    <HeroSection 
      headline="Integrate Salesforce with Help Scout" 
      subheadline="Keep your sales and support teams on the same page" 
      imgFileName="help-desk-integration--hero.png"
      imgAlt="Salesforce integration"
    />

    <GetStartedCallout theme={GET_STARTED_CALLOUT_THEMES.INDIGO} />
  </Layout>
);

export default SalesforcePage;