import React from 'react';
import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import Badge from '../components/Badge/Badge';
import Card from '../components/Card/Card';
import GetStarted from '../components/GetStartedCallout/GetStartedCallout';

const Help = () => (
  <Layout>
			<Container>
				<Hero/>
			</Container>

			{/* //make this container flex */}
			<Container>
				
				{/* <Card/>
				<Card/>
				<Card/> */}
			</Container>
			<Container>
				<GetStarted theme="INDIGO"/>
			</Container>
  </Layout>
);

export default Help;
