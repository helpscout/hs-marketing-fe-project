import React from 'react';
import GetStartedCallout, {GET_STARTED_CALLOUT_THEMES} from '../../../components/GetStartedCallout/GetStartedCallout';
import Layout from '../../../components/Layout/Layout';
import Seo from '../../../components/Seo/Seo';
import HeroSection from '../../../components/HeroSection/HeroSection';

import SeoImg from '../../../../static/images/integrations/seo/help-desk-integration--meta.png';

const JiraPage = () => (
  <Layout>
    <Seo
      description="Connect Help Scout with Jira. By integrating Jira with Help Scout, you can manage Jira issue quickly and boost productivity"
      title="Integrate Jira with Help Scout"
      image={SeoImg}
    />
    <HeroSection 
      headline="Integrate Jira with Help Scout" 
      subheadline="Boost productivity by integrating Jira with Help Scout" 
      imgFileName="help-desk-integration--hero.png"
      imgAlt="Jira integration"
    />

    <GetStartedCallout theme={GET_STARTED_CALLOUT_THEMES.INDIGO} />
  </Layout>
);

export default JiraPage;