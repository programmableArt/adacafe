import styled from '@emotion/styled';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Card,
  CardActions,
  CardContent,
  Grid,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

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

      <Grid
        container
        spacing={3}
        sx={{
          padding: 5,
        }}
      >
        <Grid item xs={10}>
          <Box
            sx={{
              borderWidth: '3px',
              borderStyle: 'dotted',
              borderColor: 'primary.main',
              minHeight: '300px',
              padding: 5,
            }}
          >
            Groups and sorting/filtering
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              borderWidth: '3px',
              borderStyle: 'dotted',
              borderColor: 'primary.main',
              minHeight: '300px',
              padding: 5,
            }}
          >
            Updoots / endoursements / rug pull rating
          </Box>
        </Grid>
      </Grid>
    </StyledPage>
  );
}

export default Index;
