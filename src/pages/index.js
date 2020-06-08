import React from "react";
import PAGECONTENT from "../content/impact.json";
import { Card, Box, Link } from 'rebass';
import '../../global.css';

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: 1024,
        mx: 'auto',
        px: 3,
      }}>
    <h1>Protests Work! Exercise Your Voice and Make Your Will Known!</h1>
    <p id="subtitle">In the wake of the nearly unprecedented protests on racial inequality, police brutality, and killings of people of color by police, this site was established to document the effects of those protests and the outcomes achieved. This site will attempt to document all aims achieved by protests, but will always represent an incomplete list, feel free to add to it by following <a href="https://github.com/Protests-Work/protests-work">these instructions</a></p>
    <p>Special thanks to Fahd Ahmed for compiling the majority of the titles/list of events.</p>
      {PAGECONTENT.articles.map((item) => (
        <Card bg="white" my={5}>
          <Link href={item.link} variant="primary">
            <h2>{item.title}</h2>
            <Box>
              <p>{item.date} | {item.location} | {item.protest}</p>
            </Box>
            <p>{item.description}</p>
          </Link>
        </Card>
      ))}
    </Box>
  )
}


export default Home;