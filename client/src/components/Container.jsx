import React from 'react';
import { Container, Grid } from '@mui/material';

import Header from '../containers/HeaderContainer';

function MyContainer({ children }) {
  return (
    <Container maxWidth="lg" sx={{ height: '100%' }}>
      <Header />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={5}
        gap={5}
      >
        {children}
      </Grid>
    </Container>
  );
}

export default MyContainer;
