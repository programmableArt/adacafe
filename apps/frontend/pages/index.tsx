import { Layout, ProjectCard, SearchAndSort } from '@adacafe/common-ui';
import { Box, Grid } from '@mui/material';

export function Index() {
  return (
    <Layout>
      <Box
        sx={{
          minHeight: '300px',
          padding: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchAndSort
              filterByCallback={(filterBy) => console.log('filterBy', filterBy)}
              sortCallback={(sortBy) => console.log('sortBy', sortBy)}
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
