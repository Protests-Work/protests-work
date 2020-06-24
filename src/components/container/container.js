import React from 'react';
import { Box } from 'rebass';

const Container = ({children}) => {
  return (
    <Box
      sx={{
        maxWidth: 1140,
        mx: 'auto',
        px: 4,
      }}>
      {children}
    </Box>
  );
};

export default Container;
