import React from 'react';
import Hero from '../components/Hero/Hero'
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import GetStarted from '../components/GetStartedCallout/GetStartedCallout';
import { graphql } from "gatsby";

const Help = ({data}) => (
	
  <Layout>
			<Container>
				<Hero/>
			</Container>

			{/* //make this container flex */}
			<Container>
				<div className="parent-flex">
					{data.allMarkdownRemark.edges.map(({ node }, index) => (
						<div className="flex-item" key={index}>
							<Card title={node.frontmatter.title}
										slug={node.frontmatter.slug}
										img= {node.frontmatter.img}
										permalink={node.frontmatter.permalink}
										subtitle={node.frontmatter.subtitle}
										/>
						</div>
					))}
				</div>
			</Container>
			<Container>
				<GetStarted theme="NEW"/>
			</Container>
  </Layout>
);


export const query = graphql`
  query {
		allMarkdownRemark(sort: {fields: frontmatter___title}) {
			edges {
				node {
					id
					frontmatter {
						title
						slug
						img
						permalink
						subtitle
					}
				}
			}
		}
	}	
`;

export default Help;
