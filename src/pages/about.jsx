import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">OpenSTEMKids Science Technology Engineering Math for kids</Header>
    <Container center={center}>
      <h3>
      OpenSTEMKids facilitates and promotes STEM for children:
      - Science
      - Technology
      - Engineering
      - Mathematics
      - (and Art and Robotics too)
      </h3>
      <h4>
      This site exists to share learning and fun. There is zero interest or attempt to make money from this site. Therefore, this site has zero affiliation with any of the products shown, or links listed, and zero of the links are affiliate links.
      </h4>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
