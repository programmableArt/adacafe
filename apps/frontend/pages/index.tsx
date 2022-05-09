import { Layout, ProjectCard, SearchAndSort } from '@adacafe/common-ui';
import { Box, Button, Grid, Paper, Stack } from '@mui/material';
import { useState } from 'react';

export function Index() {
  const [connected, setConnected] = useState(false);

  return (
    <Layout connected={connected} connectCallback={setConnected}>
      <Box
        sx={{
          minHeight: '300px',
          padding: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              {connected.toString()}
              <SearchAndSort
                filterByCallback={(filterBy) =>
                  console.log('filterBy', filterBy)
                }
                sortCallback={(sortBy) => console.log('sortBy', sortBy)}
                searchByCallback={(searchBy) =>
                  console.log('searchBy', searchBy)
                }
              />
            </Paper>
          </Grid>
          <Grid item sm={6} md={4} lg={'auto'}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item sm={6} md={4} lg={'auto'}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item sm={6} md={4} lg={'auto'}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item sm={6} md={4} lg={'auto'}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item sm={6} md={4} lg={'auto'}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item sm={6} md={4} lg={'auto'}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Index;
