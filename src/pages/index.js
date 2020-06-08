import React from "react";
import PAGECONTENT from "../content/impact.json";
import { Card, Box, Link } from 'rebass';
import '../../global.css';

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: 512,
        mx: 'auto',
        px: 3,
      }}>
    <h1>This is my site</h1>
      {PAGECONTENT.articles.map((item) => (
        <Card bg="white" my={5}>
          <Link href={item.link} variant="primary">
            <h2>{item.title}</h2>
            <Box>
              <p>{item.date} | {item.state} | {item.protest}</p>
            </Box>
            <p>{item.description}</p>
          </Link>
        </Card>
      ))}
    </Box>
  )
}


export default Home;