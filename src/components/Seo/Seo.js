import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "../../../static/images/favicon.png";

const Seo = ({
  description = '',
  image,
  robots = 'index,follow',
  title,
}) => (
  <Helmet
    htmlAttributes={{
      'lang': 'en',
    }}
    title={title}
    link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
  ]}
  >
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />

    {/* Global meta tags */}
    <meta name="robots" content={robots} />
    <meta name="description" content={description} />
    <meta name="author" content="Help Scout"/>
    {image && <meta name="thumbnail" content={image} />}

    {/* Facebook */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@helpscout" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
)

Seo.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  robots: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
