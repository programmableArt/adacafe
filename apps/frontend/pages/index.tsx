import { ProjectCard } from '@adacafe/common-ui';
import styled from '@emotion/styled';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Stack,
  Paper,
  TextField,
} from '@mui/material';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  return (
    <StyledPage>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ADA Cafe
            </Typography>
            <Button color="inherit" variant="outlined">
              Connect Wallet
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          minHeight: '300px',
          padding: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              sx={{
                padding: 2,
              }}
            >
              <Stack
                direction={'row'}
                spacing={1}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
              >
                <Stack
                  direction={'row'}
                  spacing={1}
                  justifyContent={'start'}
                  alignItems={'center'}
                  flexWrap={'wrap'}
                >
                  <Typography variant="body1">Sort By: </Typography>
                  <Button variant="outlined">Trusted</Button>
                  <Button variant="outlined">Rug Pull</Button>
                  <Button variant="outlined">ABC</Button>
                </Stack>
                <TextField id="search" label="Search" variant="outlined" />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
          <Grid item xs={4}>
            <ProjectCard
              cardTitle="ADA Cafe"
              cardInfo="Ada cafe is a hub of networking and cooperation that works towards empowering its community to accomplish their goals."
            />
          </Grid>
        </Grid>
      </Box>
    </StyledPage>
  );
}

export default Index;
