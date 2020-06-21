import React from 'react';

import { Box } from 'rebass';

const Container = ({children}) => {
  return (
    <Box
      sx={{
        maxWidth: 2048,
        mx: 'auto',
        px: 3
      }}>
      {children}
    </Box>
  );
};

export default Container;
