import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../static/favicon-32x32.svg';

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const { title: siteTitle, description, siteUrl, image } = data.site.siteMetadata;
      const title = props.title || siteTitle;
      const fullTitle = props.title ? `${props.title} - ${siteTitle}` : siteTitle;
      const metaDescription = props.description || description;
      const metaImage = `${siteUrl}${props.image || image}`;
      const url = props.url || siteUrl;

      return (
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={title}
          titleTemplate={props.title ? `%s` : `%s - ${siteTitle}`}
          link={[
            { rel: 'shortcut icon', type: 'image/svg', href: `${favicon}` },
            { rel: 'canonical', href: url }
          ]}
          meta={[
            { name: 'description', content: metaDescription },
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: metaDescription },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: url },
            { property: 'og:image', content: metaImage },
            { property: 'og:site_name', content: siteTitle },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: fullTitle },
            { name: 'twitter:description', content: metaDescription },
            { name: 'twitter:image', content: metaImage }
          ]}
        />
      );
    }}
  />
);

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`;
