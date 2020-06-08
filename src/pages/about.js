import React from "react";
import { Card, Box, Link, Flex} from 'rebass';
import Container from '../components/container/container';
import Layout from '../components/layout/layout';

const About = () => {
  return (
    <Layout>
      <Container>
        <h1>Who we are</h1>
        <p variant="subtitle">In the wake of the nearly unprecedented protests on racial inequality, police brutality, and killings of people of color by police, this site was established to document the effects of those protests and the outcomes achieved. This site will attempt to document all aims achieved by protests, but will always represent an incomplete list, feel free to add to it by following <a href="https://github.com/Protests-Work/protests-work">these instructions</a></p>
      </Container>
    </Layout>
  )
}


export default About;