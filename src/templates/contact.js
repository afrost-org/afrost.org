import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
//import Call from '../components/Call';
import Hubspot from '../components/Hubspot';
import { Helmet } from 'react-helmet';

const Contact = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const { intro_image } = data.markdownRemark.frontmatter;
  const { intro_image_absolute } = data.markdownRemark.frontmatter;
  const { intro_image_hide_on_mobile } = data.markdownRemark.frontmatter;

  const introImageClasses = `intro-image ${intro_image_absolute && 'intro-image-absolute'} ${intro_image_hide_on_mobile && 'intro-image-hide-mobile'}`;

  return (
    <Layout bodyClass="page-default-single">
      <SEO title={title} />
      <div className="intro">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-12 col-md-7 col-lg-6 order-2 order-md-1">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            {intro_image && (
              <div className="col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative">
                <img alt={title} className={introImageClasses} src={intro_image} />
              </div>
            )}
          </div>
          <div className='contactInfo'>
            {/* <Call showButton="true"></Call> */}
            <Hubspot />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
        intro_image
        intro_image_absolute
        intro_image_hide_on_mobile
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default Contact;
