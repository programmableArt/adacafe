import styled from '@emotion/styled';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ReactChild, ReactChildren } from 'react';

const StyledPage = styled.div`
  .page {
  }
`;

type LayoutProps = {
  children: ReactChildren | ReactChild;
};

export function Layout({ children }: LayoutProps) {
  return (
    <StyledPage>
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
      {children}
    </StyledPage>
  );
}

export default Layout;
