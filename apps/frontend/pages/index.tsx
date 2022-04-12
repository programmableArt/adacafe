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
  Chip,
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
                minWidth: '250px',
              }}
            >
              <Grid container spacing={2}>
                <Grid item sm={8}>
                  <Stack
                    direction={'row'}
                    spacing={1}
                    justifyContent={'start'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    height={'100%'}
                  >
                    <Typography variant="body1">Sort By: </Typography>
                    <Stack direction={'row'} spacing={1}>
                      <Chip
                        label="Trusted"
                        variant="filled"
                        color="primary"
                        clickable={true}
                      />
                      <Chip
                        label="Rug Pull"
                        variant="outlined"
                        clickable={true}
                      />
                      <Chip label="abc" variant="outlined" clickable={true} />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item sm={4}>
                  <TextField id="search" label="Search" variant="outlined" />
                </Grid>
              </Grid>
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
    </StyledPage>
  );
}

export default Index;
