import React from "react";
import PAGECONTENT from "../content/impact.json";
import { Box, Card, Flex, Heading, Image, Link, Text } from 'rebass';
import Container from '../components/container/container';
import Icon from '../components/icon/icon';
import Layout from '../components/layout/layout';
import ProtestImage from '../../static/images/protest.jpg';

const Home = () => {
  // truncates string
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

  return (
    <Layout>
      <Container>
        <Box as="section" className="intro" mt={6}>
          <Box>
            <Heading mb={3} sx={{maxWidth: '13ch'}} as="h1" fontSize={[6,7]}>Exercise your <span className="u-yellow-decor">voice</span> and make your will <span className="u-yellow-decor">known</span></Heading>
            <Text as="p" fontSize={[2, 3]} maxWidth="55ch">In the wake of the nearly unprecedented protests on racial inequality, police brutality, and killings of people of color by police, this site was established to document the effects of those protests and the outcomes achieved. This site will attempt to document all aims achieved by protests, but will always represent an incomplete list.</Text>
            <Link className="link-button" href="https://github.com/Protests-Work/protests-work" variant='linkButton' my={4}>Add a protest outcome <Icon type="arrow" height={16} width={16} /></Link>

            <Text as="p" fontSize={[0, 1]}>Special thanks to Fahd Ahmed for compiling the majority of the titles/list of events.</Text>
          </Box>
          <Box className="intro__img">
            <Image src={ProtestImage} sx={{ transform: 'scaleX(-1)' }}/>
          </Box>
        </Box>

        <Box my={5} as="section">
          <Heading mb={5}>Impacts from protests</Heading>
            <Box sx={{ display: 'grid', gridGap: 4, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            {PAGECONTENT.articles.reverse().map((item, index) => (
              <Link href={item.link} variant="cardLink" data-gtm-links={item.link} target="_blank" sx={{display: 'block'}}>
                <Card className="card" bg="white" variant="card" key={index} height="100%">
                  <Text as="p" fontSize={1} sx={{ gridColumn: '1 / -1', gridRow: '1 / span 1' }}>
                    {item.date} | {item.location}
                  </Text>
                  <Box sx={{ gridColumn: '1 / -1', gridRow: '2 / span 1' }}>
                    <Text as="h3">{truncateString(item.title, 100)}</Text>
                    <Text as="p">{truncateString(item.description, 150)}</Text>
                  </Box>
                  <Flex mt={2} sx={{ gridColumn: '1 / span 1', gridRow: '3 / span 1' }}>
                    <Box variant="tag">{item.protest}</Box>
                  </Flex>
                  <Icon className="card__icon" height={24} type="launch" width={24} />
              </Card>
            </Link>

            ))}
            </Box>
        </Box>
      </Container>
    </Layout>
  )
}


export default Home;
