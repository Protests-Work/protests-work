import React from "react";
import PAGECONTENT from "../content/impact.json";
import { Card, Box, Link, Flex} from 'rebass';
import Container from '../components/container/container';
import Layout from '../components/layout/layout';

const Home = () => {
  return (
    <Layout>
      <Container>
        <h1>Exercise Your Voice and Make Your Will Known!</h1>
        <p variant="subtitle">In the wake of the nearly unprecedented protests on racial inequality, police brutality, and killings of people of color by police, this site was established to document the effects of those protests and the outcomes achieved. This site will attempt to document all aims achieved by protests, but will always represent an incomplete list, feel free to add to it by following <a href="https://github.com/Protests-Work/protests-work">these instructions</a></p>
        <p>Special thanks to Fahd Ahmed for compiling the majority of the titles/list of events.</p>
        <h2>Impacts from Protests</h2>
        <Flex flexWrap="wrap" justifyContent="space-between">
          {PAGECONTENT.articles.reverse().map((item) => (
            <Card bg="black" variant="cardCompact">
              <Link href={item.link} variant="cardLink" data-gtm-links={item.link} target="_blank">
                <h3>{item.title}</h3>
                <Box>
                  <p>{item.date} | {item.location} | {item.protest}</p>
                </Box>
                <p>{item.description}</p>
              </Link>
            </Card>
          ))}
        </Flex>
      </Container>
    </Layout>
  )
}


export default Home;