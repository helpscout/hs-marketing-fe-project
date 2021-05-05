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
				<div>
					{data.allMarkdownRemark.edges.map(({ node }, index) => (
						<div key={index}>
							<Card title={node.frontmatter.title}
										slug={node.frontmatter.slug}
										img= {node.frontmatter.img}
										permalink={node.frontmatter.title}
										subtitle={node.frontmatter.title}
										/>
						</div>
					))}
				</div>
			</Container>
			<Container>
				<GetStarted/>
			</Container>
  </Layout>
);


export const query = graphql`
  query {
		allMarkdownRemark {
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
